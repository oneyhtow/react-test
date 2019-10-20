import React,{Component} from 'react' 
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Admin}/>
          <Redirect to='/login'/>
        </Switch>  
      </BrowserRouter>
    )
  }
}
export default App