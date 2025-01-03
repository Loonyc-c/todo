import { useState } from 'react'
import './App.css'

function App() {
  const buttons = [{text:"All", bgColor: "whitesmoke"}, {text:"Active", bgColor: "whitesmoke"}, {text:"Completed", bgColor:"whitesmoke"}];
  const [selectedButton, setSelectedButton] = useState("All");
  const handleClickButton = (selectedButtonText) => {
    setSelectedButton(selectedButtonText);
  }
  // const 

  return (
    <>
    <div className='app'>
      <div className='container'>
        <h1 className='title'>To-Do List</h1>
        <div className='newTaskContainer'> 
          <input placeholder='Add a new task' type="text" />
          <button className='newTaskButton'> Add </button>
        </div>
        <div className='filterContainer'>
          {
            buttons.map((el) => {
              return(
          <button onClick={()=>handleClickButton(el.text)} 
          style={{backgroundColor: selectedButton == el.text ? "#3C82F6" : el.bgColor}}   
          className='tab'> {el.text} </button>
              )
            })
          }
        </div>

      </div>
    </div>

    </>
  )
}

export default App
