import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import {lightTheme, darkTheme} from "./components/Themes"
import { Route, Switch } from "react-router-dom"


import 'antd/dist/antd.css'
import '@ant-design/icons'


// Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import ContactForm from "./components/ContactForm";

function App() {

  return <>
  
  
<GlobalStyle/>

  <ThemeProvider theme={lightTheme}>
    
    <Switch>

      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>
      <Route exact path="/contact" component={ContactForm}/>


    </Switch>
    

  </ThemeProvider>
  
  
  
  </>




  
    
}

export default App

