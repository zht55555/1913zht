import React from 'react'
import CustomNav from '../customNav/customNav'
import './index.less'
// import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
class Admin extends React.Component{
    render(){
        return(
           <div className='admin'>
               <div className='admin-nav'>
               <CustomNav></CustomNav>
               </div>
                <div className='admin-content'>
                    <div>
                        头部信息
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                   
                    <div>底部信息</div>
                </div>
             
           </div>
           
        )
    }
}
export default Admin