import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import WelcomeComponent from '../subcomponents/WelcomeComponent'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
import ContactForm from '../components/ContactForm'



const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`
const Container = styled.div`

padding: 2rem;

`

const Contact = styled.div`

  color: ${props => props.theme.text};
  position: fixed;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration:none;
  z-index:1;

`
const Main = () => {
  return (
   <MainContainer>

       <Container>

            <PowerButton/>

            <WelcomeComponent/>

            <SocialIcons/>


             
            <Contact>
              <h4>
                Talk to me:)
              </h4>
              
              </Contact>
              

       </Container>

    
   </MainContainer>
     
   
  )
}

export default Main