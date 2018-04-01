import React, { Component } from 'react';

import { Button } from 'antd-mobile';

import './Greeting.css';
var timer = null;
class Greeting extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        timer = setTimeout(() => {
            this.props.history.push("/mining");
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(timer);
        timer = null;
    }
    
    render() {
        return (
            <div className="flex-container greeting">
                <h3 className="greeting-title">全球最大移动挖掘平台</h3>
                <Button type="primary" inline className="greeting-btn" onClick={() => this.props.history.push("/mining")}>开挖</Button>
            </div>
        )
    }
}

export default Greeting;