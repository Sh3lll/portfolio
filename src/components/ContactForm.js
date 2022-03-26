import React from 'react'

import emailjs from "emailjs-com"

import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import GlobalStyle from "../globalStyles"
import contact from '../assets/svg/contact.svg'
import button from '../assets/svg/button.svg'
import { Row, Form, Input, Button, Col, message} from 'antd'
import FormItem from 'antd/lib/form/FormItem'



const FormStyle = styled.div`
margin: 5rem 0rem;



`

const SubmitIcon = styled.div`
background: ${props => props.theme.body};
display: flex;
position: top;
flex-direction: column;
align-items: center;

bottom: 0;
left: 2rem;
z-index:3;
&>*:not(:last-child){
    margin: 0.5rem 0;
}




`


const ContactIcon = styled.div`
background: ${props => props.theme.body};
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

const Contact = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
display: inline;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 0rem;

z-index:3;
&>*:not(:last-child){
    margin: 0.5rem 0;
}

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

  
  


    <Contact>

<div className='row'>
    <div className='column'>
   
        <p>
            I'm always interested in hearing about
 new projects. If you'd like to chat 
please get in touch.
        </p>
    </div>
    <div className='column'>


    <ContactIcon>
        <img src={contact} alt="contact" width={'150rem'} height={'150rem'}  />
        </ContactIcon>

    
        <form   
    
    onSubmit={sendEmail}>
        <Row>
        <label> Name </label>  
        <input style={{width: '30%', padding: '5px 5px', margin: '8px 0', }} type="string" name="name"></input>
        </Row>

        <Row>
        <label> Email </label>  
        <input style={{width: '30%', padding: '5px 5px', margin: '8px 0', }} type="email" name="email"></input>
            </Row>

            <Row>
            <label> Message </label>  
        <textarea style={{width: '30%', padding: '5px 5px', margin: '8px 0', }} name="message" rows='6'/>
            </Row>

            <Row>
            
            </Row>
      
           

        <input  style={{ 
        fontSize: '20px', color: '#FFFFFF',background:'#D61111', lineHeight: '40px', width: '120px', 
        borderRadius: '40px', border: '1px '}}
     
           type='submit' value='Submit'/>
    </form>
        
        
    </div>
</div>
    
<div>
       
          
        </div>

      

   
    
<div>



 

  

</div>

 
    </Contact>
    
  )
}

export default ContactForm