import React, {Component} from 'react';
import { Menu,Layout} from 'element-react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Head from './commomn/head'
import Home from './home/home'
import Cases from './medicalRecords/cases'
export default class Index extends Component {
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
        const styleComponent = {
            context:{
                marginTop:"60px",
                textAlign:'center',
                height:'calc(100% - 60px)',
                overflow:"auto"
            },
            menuStyle:{
                height:"100%",
                background:"#336795",
            },
            submenuTitle:{
                color:"#fff"
            },

        };
        return (
            <Router>
                <div className="height_100">
                    <Layout.Row className="height_100">
                        <Layout.Col span="24">
                            <Head />
                        </Layout.Col>
                        <Layout.Col span="24" style={styleComponent.context} >
                            <Layout.Col span="4" className="tac" style={styleComponent.menuStyle}>
                                <Menu defaultActive="1" style={styleComponent.menuStyle}  className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                                    <Menu.Item index="1" ><Link to="/home">首页</Link></Menu.Item>
                                    <Menu.SubMenu index="2" title="会员病历管理" >
                                        <Menu.Item index="2-1"><Link to="/cases">病历列表</Link></Menu.Item>
                                        <Menu.Item index="2-2">留言反馈</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="3" title="关系管理">
                                        <Menu.Item index="3-1">关系列表</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="4" title="健康会员管理">
                                        <Menu.Item index="4-1">会员列表</Menu.Item>
                                        <Menu.Item index="4-2">实名审核</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="5" title="医生会员管理">
                                        <Menu.Item index="5-1">医生列表</Menu.Item>
                                        <Menu.Item index="5-2">会诊圈管理</Menu.Item>
                                        <Menu.Item index="5-3">信息往来</Menu.Item>
                                        <Menu.Item index="5-4">认证审核</Menu.Item>
                                        <Menu.Item index="5-5">医生实名审核列表</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="6" title="系统管理">
                                        <Menu.Item index="6-1">用户管理</Menu.Item>
                                        <Menu.Item index="6-2">角色管理</Menu.Item>
                                        <Menu.Item index="6-3">菜单管理</Menu.Item>
                                        <Menu.Item index="6-4">录入员管理</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="7" title="病志审核">
                                        <Menu.Item index="7-1">病志审核</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="8" title="随访">
                                        <Menu.Item index="8-1">病情阶段总结</Menu.Item>
                                        <Menu.Item index="8-2">病情个性化跟踪</Menu.Item>
                                        <Menu.Item index="8-3">病情随机记录</Menu.Item>
                                        <Menu.Item index="8-4">随访套餐管理</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="9" title="原始资料中心">
                                        <Menu.Item index="9-1">原始资料</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="10" title="任务中心">
                                        <Menu.Item index="10-1">任务控制台</Menu.Item>
                                        <Menu.Item index="10-2">分配控制台</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="11" title="病历输入模块">
                                        <Menu.Item index="11-1">诊疗记录录入模块</Menu.Item>
                                        <Menu.Item index="11-2">基础病史输入模块</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="12" title="病历编写模块">
                                        <Menu.Item index="12-1">基础病史编写</Menu.Item>
                                    </Menu.SubMenu>
                                </Menu>
                            </Layout.Col>
                            <Layout.Col span="18" className="col_margin_top">
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/cases" component={Cases}/>
                            </Layout.Col>
                        </Layout.Col>
                    </Layout.Row>
                </div>
            </Router>
        );

    }
    onOpen() {

    }

    onClose() {

    }
}
