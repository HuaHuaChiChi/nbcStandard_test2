import styled from "styled-components";


const Input = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e,target.title.value
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
