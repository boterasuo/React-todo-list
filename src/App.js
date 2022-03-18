import React, { useState } from 'react'
import MainContent from './components/MainContent'
import InputCard from './components/InputCard'
import ToggleBtn from './components/ToggleBtn'
import ToDoList from './components/ToDoList'
import FinishedList from './components/FinishedList'

function App() {
  const [toggle, setToggle] = useState('unfinished')
  const [todoItem, setTodoItem] = useState('')
  return (
    <>
      <MainContent>
        <InputCard todoItem={todoItem} setTodoItem={setTodoItem} />
        <ToggleBtn toggle={toggle} setToggle={setToggle} />
        {toggle === 'unfinished' ? (
          <ToDoList todoItem={todoItem} />
        ) : (
          <FinishedList />
        )}
        {/* <ToDoList toggle={toggle} />
        <FinishedList toggle={toggle} /> */}
      </MainContent>
    </>
  )
}

export default App
