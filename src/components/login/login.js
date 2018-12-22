import React, {Component} from 'react';
import "../../static/css/base.scss"
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div classname="loginBox">
                    <div classname="login" ref="loginPage">
                        <div classname="inputForm">
                            <form action="">
                                <h4 classname="login_h4">登录</h4>
                                <p>小松康葆后台管理系统</p>
                                <input type="text"  classname ="username" placeholder="用户名" ref="ontext" name="用户名"/>
                                <input type="password" classname ="password"  placeholder="密码" name="密码"/>
                                <input type="button" classname ="submit" value="登录"  />
                            <div classname ="remind remind_a" ref="r1" ><i></i>用户名不能为空</div>
                            <div classname ="remind remind_b" ref="r2" ><i></i>密码不能为空</div>
                        </form>
                    </div>

                </div>
               {/* <bgcanvas classname ="bgCanvas"></bgcanvas>*/}
                <div classname ="result" ref="logInfo">
                    <p >登录成功</p>
                </div>
            </div>
            </div>
        )
    }
}
