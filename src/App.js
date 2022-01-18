import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom'
import Home from './componets/pages/Home'
import Company from './componets/pages/Company'
import Contact from './componets/pages/Contact'
import NewProject from './componets/pages/NewProject'
import Projects  from './componets/pages/Projects'

import Container from './componets/layout/Container'
import Navbar from './componets/layout/Navbar'
import Footer  from './componets/layout/Footer'
import Project from './componets/pages/Project'





function App() {
  return (
    <Router>
       <Navbar />
      
      <Switch>
       
        <Container customClass="min-height"> 
        <Route exact path="/">
          <Home />
        </Route>

        <Route  path="/projects">
          <Projects />
        </Route>

        <Route  path="/company">
          <Company />
        </Route>

        <Route  path="/contact">
          <Contact />
        </Route>

        <Route  path="/newproject">
          <NewProject />
        </Route>

        <Route  path="/Project/:id">
          <Project/>
        </Route>
        
        </Container>
      </Switch>
      
      <Footer/>

     
    </Router>

   


  )
}

export default App
