import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {darkTheme} from './Themes';


// import WelcomeComponent from '../subcomponents/WelcomeComponent';
//import SocialIcons from '../subcomponents/SocialIcons';
import PowerButton from '../subcomponents/PowerButton';
import ParticleComponent from '../subcomponents/ParticleComponent';
import BigTitle from '../subcomponents/BigTitle'
import me from '../assets/Images/me.png'

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
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
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


<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={me} alt="me" />
        </Spaceman>    
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