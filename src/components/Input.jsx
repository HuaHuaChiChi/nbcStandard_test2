import shortid from "shortid";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";

const Input = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value
    const body = e.target.body.value

    const newTodo = {
      id : shortid(),
      title,
      body,
      isDone : false
    }
    dispatch(addTodo(newTodo))
  }

  return (

    <InputContainer>
        <form onSubmit={handleSubmit}>      
          <input type="text" placeholder="제목" name="title"/>
          <input type="text" placeholder="내용" name="body"/>
          <button>입력</button>
        </form>
    </InputContainer>
  )
}
export default Input;


const InputContainer = styled.div`
  height : 200px;
  display : flex;
  flex-direction : column;
  align-items : center;`
