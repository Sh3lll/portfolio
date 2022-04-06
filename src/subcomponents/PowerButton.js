
// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import homesvg from '../assets/Images/homesvg.svg'


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

const PowerButton = () => {
    return (
        <Power>

          <NavLink to="/">
                <img width={100} height={100} src={homesvg} alt="home" />
            </NavLink>
        
     



        </Power>
    )
}

export default PowerButton
