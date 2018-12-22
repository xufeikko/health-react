import React, {Component} from 'react';

export default class Xxx extends Component {
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

    handleChange = (event) => {
        this.setState({
            msg: event.target.value;
    })
    }

    render() {
        return (
            <div></div>
        )
    }
}
