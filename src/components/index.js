import React, {Component} from 'react';
import { Button,Layout} from 'element-react';
import Head from './commomn/head'
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
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="24">
                        <Head />
                    </Layout.Col>
                </Layout.Row>
            </div>

    )
    }
}
