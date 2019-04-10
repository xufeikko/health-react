import React, {Component} from 'react';
import { Input,Layout,Button,Table} from 'element-react';
import axios from 'axios'
export default class Cases extends Component {
    getInitialState() {
        return {}
    }

    constructor(props) {
        super(props);
        this.state = {
            table :{
                columns:[
                    {
                        label: "病历编号",
                        prop: "id",
                        align: 'center'
                    },
                    {
                        label: "会员编号",
                        prop: "userId",
                        align: 'center'
                    },
                    {
                        label: "姓名",
                        prop: "userName",
                        align: 'center'
                    },
                    {
                        label: "科室",
                        align: 'center',
                        render:(row)=>{
                            return <span>{row.departmentsFirst}+{row.departmentsSecond}</span>
                        }
                    },
                    {
                        label: "创建时间",
                        prop: "createTime",
                        align: 'center'
                    },
                    {
                        label: "更新时间",
                        prop: "updateTime",
                        align: 'center'
                    },
                    {
                        label: "带更新病志编号",
                        prop: "recordId",
                        align: 'center'
                    },
                    {
                        label: "疾病名称",
                        prop: "statusTitle",
                        align: 'center'
                    },
                    {
                        label: "状态",
                        prop: "clerk",
                        align: 'center'
                    },
                    {
                        label: "输入员",
                        prop: "clerk",
                        align: 'center'
                    },
                    {
                        label: "操作",
                        align: 'center',
                        render: (row, column, index) => {
                            return <span>
                                <Button type="text" size="small" onClick={this.checkDetail.bind(this, row)}>查看</Button>
                                <Button type="text" size="small" onClick={this.showBox.bind(this, row)}>删除</Button>
                            </span>
                        }
                    }
                ],
                data:[]
            },
        };
    }

    componentDidMount() {
        axios.get("/rest/admin/cases/findPage?pageSize=10&page=1")
            .then((resp)=>{
                let data = resp.data.body.list;
                this.setState({table:{
                        ...this.state.table,
                        data:data
                    }});
            })
            .catch((error)=>{

             })
    }
    checkDetail(row){

    }
    showBox(row){

    }
    render() {
        const cases ={
            id:'',
            userId:'',

        };
       function search(){
           axios.get("/rest/admin/cases/findPage?pageSize=15&page=1"+'&id='+cases.id+'&userId='+cases.userId)
               .then((resp)=>{
                   let data = resp.data.body.list;
                   this.setState({table:{
                           ...this.state.table,
                           data:data
                       }});
               })
               .catch((error)=>{

               })
        }
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="24">
                        <Layout.Col span="6">
                            <Layout.Col span="8">
                                <span>病历编号：</span>
                            </Layout.Col>
                            <Layout.Col span="16">
                                <Input placeholder="请输入病历编号" value={cases.id}/>
                            </Layout.Col>
                        </Layout.Col>
                        <Layout.Col span="6">
                            <Layout.Col span="8">
                                <span>会员编号：</span>
                            </Layout.Col>
                            <Layout.Col span="16">
                                <Input placeholder="请输入会员编号" value={cases.userId}/>
                            </Layout.Col>
                        </Layout.Col>
                        <Layout.Col span="2">
                            <Button type="primary" onClick={search}>查询</Button>
                        </Layout.Col>
                    </Layout.Col>
                    <Layout.Col span="24" className="col_margin_top">
                        <Table  style={{width: '100%'}} columns={this.state.table.columns} data={this.state.table.data} border={true}/>
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}
