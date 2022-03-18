  
import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import { keyframes } from 'styled-components'


import welcomenobg2 from '../assets/Images/welcomenobg2.png'


const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`


const Welcome = styled.div`

display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

position: fixed;
left: 1rem;
top: 1rem;
z-index:3;
animation: ${float} 2s ease infinite;

img{
    width: 24%;
    height: 24%;
    background-color: #RTJDY3;
}

`




const WelcomeComponent = (props) => {
    return (
   
        <Welcome>
            <img src={welcomenobg2} alt="welcome" />
        </Welcome> 
                  
    )
}

export default WelcomeComponent
