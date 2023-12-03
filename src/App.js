import './App.css';
import {useState} from "react";

const fun = () => {

}
function App() {
    const [newItem, setNewItem] = useState("")
    const [todo, setTodos] = useState([])
    const [text, setText] = useState("")
    const [val, setVal] = useState(0)





    function handleClick() {
        console.log("Clicked delete")
        // send an RPC to a server
        const xhr = new XMLHttpRequest()
        xhr.addEventListener("progress", (event) => {
            setVal(event.loaded)
            console.log("loading")
        })
        xhr.open('GET', "https://run.mocky.io/v3/0c46397c-be0b-4adb-a5bd-781034fb81fc")
        xhr.onload = function() {
            if (xhr.status == 200) {
                setText(xhr.responseText)
            }
        }
        xhr.send()

    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodos(curr => {
            return [
            ...curr,
            {id: crypto.randomUUID(), title: newItem, completed: false}
        ]})
    }


    console.log(todo)

  return <> <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item" />
      </div>
  </form>
    <h1 className="header">Todo list</h1>
    <u1 className="list">
        {todo.map(tod => {
            return <li key={todo.id}>
                <label>
                    <input type="checkbox" checked={tod.completed} />
                    {tod.id}
                </label>
                <button onClick={handleClick} className="btn btn-danger">{"delete"}</button>
            </li>
        })}
        #test
    </u1>
      <h1>{text}</h1>
      <h1>{val}</h1>

  </>

}


export default App;
