import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {darkTheme} from './Themes';



import ParticleComponent from '../subcomponents/ParticleComponent';
import { NavLink } from 'react-router-dom'
import homesvg from '../assets/Images/homesvg.svg'
import BigTitle from '../subcomponents/BigTitle'
import me from '../assets/Images/me3.png'



const Power = styled.div`
position: absolute;
top: 10%;
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

&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}


&>::last-child{
    padding-top: 1rem;
   }
`



const Box = styled.div`
background-color: ${props => props.theme.text};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: fixed;
top: 1%;
right: 5%;
width: 30vw;
height: 45vw;
//animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: 100%;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 20rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>



<Box>


<Power>
    <NavLink to="/">
                <img width={70} height={70} src={homesvg} alt="home" />
            </NavLink>
    
    </Power>



<ParticleComponent theme='dark' />
{/* 
        <Spaceman>
            <img src={me} alt="me" />
        </Spaceman>     */}
        <Main>
       The name is Wanjiru. Mercy Wanjiru.

<br /> <br/>
        I am a Frontend Developer highly effective at developing and standardizing designs according
to company brand and objectives.

<br /> <br/>
I enjoy exploring the world of tech, learning and trying to keep up 
with evolving trends.
<br/> <br/>

When I'm not buried in code and an EDM playlist, I like taking walks, yoga, catching up on some Netflix and whipping up a nice meal. 
        </Main>

        <BigTitle text="About Me" top="10%" left="10%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage