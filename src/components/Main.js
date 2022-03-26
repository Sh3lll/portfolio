import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import WelcomeComponent from '../subcomponents/WelcomeComponent'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
import ContactForm from '../components/ContactForm'
import { YinYang } from './AllSvgs'



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

const WORK = styled(NavLink)`

color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);

text-decoration: none;
z-index:1;
`

const BLOG = styled(NavLink)`

color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);

text-decoration: none;
z-index:1;
`

const Contact =styled(NavLink)`

  color: ${props => props.theme.text};
  position: fixed;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration:none;
  z-index:1;

`


const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`


const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`



const Main = () => {
  return (
   <MainContainer>

       <Container>

            <PowerButton/>

            <WelcomeComponent/>

            <SocialIcons/>


           
             
            <Contact to="/contact">
                 
            <h4>
              Talk to me:)
            </h4>                
              
              </Contact>

              <BLOG  to="/blog">          
                 <h4>
              Blog
              </h4>
                    </BLOG>

              <WORK  to="/work">          
                 <h4>
                Work
              </h4>
                    </WORK>

              <BottomBar>
                <ABOUT to="/about">
                    <h4>
                      About Me
                    </h4>
                  
                </ABOUT>
                <SKILLS to="/skills">
                    <h4>
                      My Skills
                    </h4>
                  
                </SKILLS>
              </BottomBar>
              

       </Container>

    
   </MainContainer>
     
   
  )
}

export default Main