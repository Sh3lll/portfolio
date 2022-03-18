
// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import homesvg from '../assets/Images/homesvg.svg'


const Power = styled.div`
position: fixed;
top: 1rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding: 0.1rem;
// border-radius: 50%;
// border: 1px solid #000;
// width: 6.5rem;
// height: 6.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;
cursor: pointer;
&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}
&>*:first-child{
    text-decoration: none;
    color: inherit;
}


img{
    width: 8.5rem;
    height: 8.5rem;
    background-color: #RTJDY3;
}
`

const PowerButton = () => {
    return (
        <Power>

          <NavLink to="/">
               {/* <PowerBtn width={30} height={30} fill="currentColor"/> */}

               <img src={homesvg} alt="home" />
            </NavLink>
        
     



        </Power>
    )
}

export default PowerButton
