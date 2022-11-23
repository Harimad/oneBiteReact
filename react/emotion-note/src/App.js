import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" component={New} />
          <Route path="/edit" component={Edit} />
          <Route path="/diary" component={Diary} />
          {/* <Route path="/diary/:id" component={Diary} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
