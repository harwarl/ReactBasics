import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect} from 'react';
import apiRequest  from './apiRequest';


function App() {
  const API_URL = "http://localhost:4300/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(()=>{
  //   console.log('render');
  // })

  // useEffect(()=>{
  //   console.log('loadTime')
  // }, [])

  // useEffect(()=>{
  //   console.log('Items State')
  // }, [items])

  //using use Effect to save to local storage upon change in items

  useEffect(()=>{
    const fetchItems = async() =>{
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Did not receive the expected Result");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      }catch(err){
        setFetchError(err.message);
      }finally{
        setIsLoading(false);
      }
    }

    console.log();
    setTimeout(()=>{
      (async () => await fetchItems())();  //calling the function
    }, 2000)
  }, [])

  const handleCheck = async(id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const myItem = listItems.filter((item)=> item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }

    const patchUrl = `${API_URL}/${id}`
    const error = await apiRequest(patchUrl, updateOptions);
    if(error) setFetchError(error);
  }

  const handleDelete = async(id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems);

    const deleteOptions = {method: 'delete'}
    const deleteUrl = `${API_URL}/${id}`;
    const error = await apiRequest(deleteUrl, deleteOptions);
    if(error) setFetchError(error);
  }

  const addItem = async(item) =>{
    const id = items.length? items[items.length - 1].id + 1: 1;
    const myNewItem = {id: id, checked: false, item: item};
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "post", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const error = await apiRequest(API_URL, postOptions);
    if(error) setFetchError(error);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">

      <Header title='Shopping List' />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem 
      search={search}
      setSearch={setSearch}
      />

      <main>
        {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
        {isLoading && <p>Loading Items...</p>}
        {!fetchError && !isLoading && <Content
          items={(items.filter(item => (item.item.toLowerCase()).includes(search.toLowerCase())))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        }
        
      </main>

      <Footer
        length={items.length}
      />

    </div>
  );
}

export default App;
