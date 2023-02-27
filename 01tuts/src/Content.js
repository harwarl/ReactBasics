import React from 'react'   
import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) => {
    return (
        <>
            {/* <p>
                Hello {name}!
            </p>
            <button onClick={handleChangeName}>
                Change Name
            </button>
            <button onClick={handleClick1}>
                Increase Count
            </button>
            <button onClick={handleClick4}>
                Check Count
            </button>
            <button onClick={()=>handleClick2('Dave')}>
                Click It
            </button>
            <button onClick={(e)=>handleClick3(e)}>
                Click It
            </button> */}
            {items.length ? (
                <ItemList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ margin: "2rem" }}> Your List is Empty</p>
            )}
        </>
    )
}

export default Content