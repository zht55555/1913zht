import React from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'

import Login from './component/login/login'
import Admin from './component/admin/index'
import Home from './component/home/home'
import User from './component/user/user'
class RootRouter extends React.Component{
    render(){
        return(
        <HashRouter>
           
            <Switch>
                <Redirect exact from='/' to='/login'/>
                <Route path='/login' component={Login}/>
                <Route path='/admin' render={()=>{
                    return (
                        <Admin>
                            <Route path='/admin/home' component={Home}/>
                            <Route path='/admin/user' component={User}/>
                        </Admin>
                    )
                }
                }/>
            </Switch>
        </HashRouter>
        )
    }
  
}
export default RootRouter