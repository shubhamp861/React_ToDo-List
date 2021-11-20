
import './App.css';
import { useState } from 'react';

function App() {
  const [itemList,additem] = useState([]);
  const [item,updateitem] = useState();
  const setItem =(event)=>{
     updateitem(event.target.value);
  }
  const AddList=()=>{
    additem((oldVal)=>{
      return [...oldVal,item];
    })
    updateitem("");
  }
   const clearList=()=>{
    additem([]);
  }

  return (
    <div className="App">
     <h1 className="heading">TO DO LIST : </h1>
     <input type="text" placeholder="Enter item ...." onChange={setItem} value={item}></input>
     <button onClick ={AddList}>+</button>
     <button onClick ={clearList}>Clear All</button>
     <br/>
     <div>
       <ul> 
         {itemList.map((val)=><li>{val}</li>)}
       </ul>
     </div>
    </div>
  );
}

export default App;
