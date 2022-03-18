import React from 'react'
import { NavLink } from 'react-router-dom'
import { darkTheme } from '../components/Themes'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import  github  from '../assets/svg/github.svg'
import  hashnode  from '../assets/svg/hashnode.svg'
import  linkedin  from '../assets/svg/linkedin.svg'


const Icons = styled.div`

display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index:3;
&>*:not(:last-child){
    margin: 0.5rem 0;
}


`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body  };
`

const SocialIcons = () => {
  return (


    <Icons>

     
        <div>
            <NavLink target="_blank"  to={{pathname:"https://github.com/Sh3lll"}}>
                <img src={github} alt="linkedin" width={30} height={30} />
                </NavLink>
        </div>

        <div>
        <NavLink target="_blank"  to={{pathname:"https://www.linkedin.com/in/wanjirumercy/"}}>
            <img src={linkedin} alt="linkedin" width={30} height={30} />
                </NavLink>
        </div>

        <div>
        <NavLink target="_blank"  to={{pathname:"https://devajust.hashnode.dev/"}}>
         <img src={hashnode} alt="hashnode" width={30} height={30} />
            </NavLink>
        </div>



        <Line/>

        </Icons>
   
  )
}

export default SocialIcons