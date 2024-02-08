import React from 'react'
import {Todo} from '../../Components/organismes';
import { HomeContainer } from './home.styled';

const Home:React.FC = () => {
  return (
    <HomeContainer>
      <Todo/>
    </HomeContainer>
  )
}

export default Home
