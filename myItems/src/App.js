import { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [reqType, setReqType] = useState('users');
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error("Error Fetching Data");
        const items = await response.json();
        setData(items);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    (async () => fetchData())();
  }, [reqType])

  return (
    <div className="App">
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />

      {fetchError && <p color="red">Error: {`${fetchError}`}</p>}
      {isLoading && <p>Loading Data...</p>}
      {!fetchError && !isLoading && <Table
        data={data}
      />}
    </div>
  );
}

export default App;