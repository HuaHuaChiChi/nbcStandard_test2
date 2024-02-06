import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
      <P>헤더</P>
    </MainHeader>
  )
}

export default Header

const MainHeader = styled.div`
  background-color : green;
  height : 200px;
  display : flex;
  flex-direction : column;
  align-items : center;
`
const P = styled.p`
font-size : 50px;
color : white;`