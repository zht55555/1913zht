import React from 'react'
import { Menu, Icon, Button } from 'antd';
import {withRouter} from 'react-router-dom'
let navData=[
    {name:'首页',path:'/home'},
    {name:'设置',path:'/setting'},
    {name:'用户管理',path:'/user',
      children:[{name:'用户列表',path:'/user/list'},
                {name:'用户删除',path:'/user/del'},
            
    ]
  }
]
const { SubMenu } = Menu;
class CustomNav extends React.Component{

  renderItem=(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu title={item.name}>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return <Menu.Item>{item.name}</Menu.Item>
      }

    })
  }
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
      render() {
        return (
          <div style={{ width: 256 }}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <Menu  defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}>{this.renderItem(navData)}</Menu>
            {/* <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >{this,renderItme(navData)}
              <SubMenu
                
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }
              >
                
              </SubMenu>
         
            
            </Menu> */}
          </div>
        );
      }
    }

export default withRouter(CustomNav)