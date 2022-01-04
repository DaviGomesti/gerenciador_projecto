import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom'
import Home from './componets/pages/Home'
import Company from './componets/pages/Company'
import Contact from './componets/pages/Contact'
import NewProject from './componets/pages/NewProject'
import Container from './componets/layout/Container'
import Navbar from './componets/pages/Navbar'
import Footer  from './componets/layout/Footer'

function App() {
  return (
    <Router>
      
      <Switch>
        <Navbar/>
        <Container customClass="min-height">
        <Route exact path="/">
          <Home />
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
        </Container>
      </Switch>
      <Footer/>
    </Router>


  )
}

export default App
