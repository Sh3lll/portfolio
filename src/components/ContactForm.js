import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {darkTheme} from './Themes';
import ParticleComponent from '../subcomponents/ParticleComponent';
import emailjs from "emailjs-com"
import contact from '../assets/svg/contact.svg'
import { Row,  message} from 'antd'
import BigTitle from '../subcomponents/BigTitle'




const Power = styled.div`
position: absolute;
top: 7%;
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
// const Contact = styled.div`
// background: ${props => props.theme.text};
// width: 100vw;
// height: 100vh;
// display: inline;
// flex-direction: column;
// align-items: center;
// position: fixed;
// bottom: 0;
// left: 0rem;

// z-index:3;
// &>*:not(:last-child){
//     margin: 0.5rem 0;
// }

//  `

const ContactIcon = styled.div`
background: ${props => props.theme.text};
display: flex;
position: top;
flex-direction: column;
align-items: center;
transform: translate(20%, 0);

bottom: 0;
left: 2rem;
z-index:3;
&>*:not(:last-child){
    margin: 0.5rem 0;
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
const Contact = styled.div`
position: fixed;
top: 30%;
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
  
  width: 30vw;
  height: 40vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(9rem + 9vw);
  top: 25rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const ContactForm = () => {


    function sendEmail (e)  {
                e.preventDefault();
            
                emailjs.sendForm('service_amtcr3o', 'template_d6nrts6', e.target, 'c4nZ-rp11sS2rsqzj')
                  .then((result) => {
                      console.log(result.text);
                      message.success('Message sent :)');
                  }, (error) => {
                      console.log(error.text);
                  });
              };
    return (
        <ThemeProvider theme={darkTheme}>



<Box>


<Power>
    
                <img width={110} height={100} src={contact} alt="home" />
            
    
    </Power>



<ParticleComponent theme='dark' />

       
         <Contact>

               <div className='row'>

                 
                   <div className='column'>


                    


                       <form
                        
                          onSubmit={sendEmail}>
                          <Row>
                              <label style={{ width: '20%',  padding: '5px 5px', margin: '8px 0', }}> Name </label>
                              <input style={{ width: '70%', padding: '5px 5px', margin: '8px 0', }} type="string" name="name"></input>
                          </Row>

                          <br></br>

                          <Row>
                              <label style={{ width: '20%',  padding: '5px 5px', margin: '8px 0', }}> Email </label>
                              <input style={{ width: '70%', padding: '5px 5px', margin: '8px 0', }} type="email" name="email"></input>
                          </Row>

                          <br></br>

                          <Row>
                              <label style={{ width: '20%',  padding: '5px 5px', margin: '8px 0', }}> Message </label>
                              <textarea style={{ width: '70%', padding: '5px 5px', margin: '8px 0', }} name="message" rows='6' />
                          </Row>

                          <br></br>


                       
                        <input style={{
                          marginLeft:'40%', fontSize: '20px', color: '#FFFFFF', background: '#D61111', lineHeight: '40px', width: '150px',
                              borderRadius: '40px', border: '1px '
                          }}

                              type='submit' value='Submit' />

                        
                         
                      </form>


                  </div>
              </div>

              <div>


              </div>



              <div>



              </div>


          </Contact>
        <Main>
      
        I'm always interested in hearing about   new projects. 
                        
<br /> <br/>

         If you'd like to chat, feel free to get in touch.




        </Main>

        <BigTitle text="Contact Me" top="15%" left="10%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default ContactForm