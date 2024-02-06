import React from 'react'
import TodoCards from './TodoCards'
import  Input  from './Input'
import { useSelector } from 'react-redux'

function Main() {
  const data = useSelector((item)=> item.state)
  console.log(data)
  return (
    <div>
      <Input></Input>
      <TodoCards></TodoCards>
    </div>
  )
}

export default Main