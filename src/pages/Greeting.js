import React, { Component } from 'react';

import { Button } from 'antd-mobile';

import './Greeting.css';

class Greeting extends Component {
    
    render() {
        return (
            <div className="flex-container greeting">
                <h3 className="greeting-title">全球最大移动挖掘平台</h3>
                <Button type="primary" inline className="greeting-btn">开挖</Button>
            </div>
        )
    }
}

export default Greeting;