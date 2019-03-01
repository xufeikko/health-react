import React, {Component} from 'react';

export default class Head extends Component {
    getInitialState() {
        return {}
    }

    constructor(props) {
        super(props);
        this.state = {
            msg: '',
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="headerLeft">
                        <p className="logo">LOGO</p>
                        <p className="text">小松康葆后台管理系统</p>
                    </div>
                    <div className="headerRight" >
                    <p className="exit">退出</p>
                    <p><a><img src="../../../static/img/退出.png"/></a></p>
                </div>
                </div>
            </div>
        )
    }
}
