import React from 'react'
import { motion } from 'framer-motion'
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
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);

text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);

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
color:  ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const Center = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


&>::last-child{
    padding-top: 1rem;
   }
`



const Main = () => {
  return (
   <MainContainer>

       <Container>

            <PowerButton/>

            <WelcomeComponent/>

            <SocialIcons/>

            {/* <Center>
              <YinYang width={150} height={150} fill='curreColor'/>
                <span>Click Here</span>
            </Center> */}


           
             
            <Contact to="/contact">
            <motion.h4
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Talk to me..
                </motion.h4>

              
              </Contact>

              <BLOG  to="/blog">  
              <motion.h4
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                   Blog
                </motion.h4>        
              
                    </BLOG>

              <WORK  to="/work">   
              <motion.h4
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Work
                </motion.h4>       
               
                    </WORK>

              <BottomBar>
                <ABOUT to="/about">
                <motion.h4
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                   About Me..
                </motion.h4>
                   
                  
                </ABOUT>
                <SKILLS to="/skills">
                <motion.h4
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    My Skills
                </motion.h4>
                 
                  
                </SKILLS>
              </BottomBar>
              

       </Container>

    
   </MainContainer>
     
   
  )
}

export default Main