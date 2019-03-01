import React, {Component} from 'react';
import "../../../static/css/base.scss"
import BgCanvas from './bgCanvas'
import {withRouter} from "react-router-dom";
import axios from 'axios'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                username:'',
                password:'',
            },

        };
    }

    componentDidMount(){
        let oHeight = window.innerHeight;
        document.getElementsByClassName("loginBox")[0].style.height = oHeight+'px' ;
    }
    handleChange = (e) => {
        let data = this.state.userInfo;
        switch (e.target.name){
            case "username":
                data.username= e.target.value;
                this.setState({data});
                break;
            case "password":
                data.password= e.target.value;
                this.setState({data});
                break;
            default:
                break;

        }

    };
    login=()=>{
        axios.post('/rest/admin/hr/login',this.state.userInfo)
            .then((rest)=>{
                if (rest.data.success){
                    sessionStorage.setItem('userLoginInfo', JSON.stringify(rest.data.body));
                    this.props.history.push('/index')
                    //this.context.router.push('/index')
                }
            })
            .catch((error)=>{
                console.log(error);
            })
    };
    render() {
        return (
            <div>
                <div className="loginBox">
                    <div className="login" ref="loginPage">
                        <div className="inputForm">
                            <form action="">
                                <h4 className="login_h4">登录</h4>
                                <p>小松康葆后台管理系统</p>
                                <input type="text"  className ="username" placeholder="用户名" ref="ontext" name="username" value={this.state.userInfo.username} onChange={this.handleChange}/>
                                <input type="password" className ="password"  placeholder="密码" name="password" value={this.state.userInfo.password} onChange={this.handleChange}/>
                                <input type="button" className ="submit" value="登录"  onClick={()=> this.login()}/>
                           {/* <div className ="remind remind_a" ref="r1" >用户名不能为空</div>
                            <div className ="remind remind_b" ref="r2" >密码不能为空</div>*/}
                        </form>
                    </div>

                </div>
                <BgCanvas  />
               {/* <bgcanvas classname ="bgCanvas"></bgcanvas>*/}
               {/* <div classname ="result" ref="logInfo">
                    <p >登录成功</p>
                </div>*/}
            </div>
            </div>
        )
    }
}