import React from 'react'
import { Form, Row, Col, Input, Button} from 'antd'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import GlobalStyle from "../globalStyles"
import contact from '../assets/svg/contact.svg'
import submit from '../assets/Images/submit.png'

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

const FormStyle = styled.div`
margin: 5rem 50rem;



`


const ContactIcon = styled.div`

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

const Contact = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;
align-items: center;
position: fixed;
left: 50%;
transform: translate(-50%, 0);
padding: 0.1rem;


img{
    width: 15rem;
    height: 15rem;
    background-color: #RTJDY3;
}
`

const ContactForm = () => {
  return (

  
  


    <Contact>


    
<div>
        <ContactIcon>
        <img src={contact} alt="contact"  />
        </ContactIcon>
        
          
        </div>
    
<div>

<FormStyle>
<div>
    
    <Form>

        <Form.Item
                        name="name"
                        label="Name"
                        hasFeedback
                        rules={[{ 
                            required: false, 
                            
                        }]}
                        >
                        <Input />
            </Form.Item>

            <Form.Item
                        name="email"
                        label="Email"
                        hasFeedback
                        rules={[{ 
                            required: false, 
                            
                        }]}
                        >
                        <Input type={'email'} />
            </Form.Item>

            <Form.Item
                        name="message"
                        label="Message"
                        hasFeedback
                        rules={[{ 
                            required: false, 
                            
                        }]}
                        >
                        <Input.TextArea 
                        rows={6}
                        showCount maxLength={100} />
            </Form.Item>

            <Row>
            <Power>

           

                <img src={submit} alt="submit" />
           





            </Power>
                </Row>

    </Form>

    <form>

     


        
    </form>

  
    

    </div>


</FormStyle>

<h1> ContactForm </h1>

    

  

</div>
    </Contact>
    
  )
}

export default ContactForm