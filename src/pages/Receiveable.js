
import React, { Component } from 'react';

import { Button } from 'antd-mobile';

import './Receiveable.css';
import Header2 from '../components/Header2';

class Receiveable extends Component {
    
    render() {
        return (
            <div className="receiveable-container">
                <Header2 title="收款" />
                <div className="token-area">
                    <div className="title">
                        <Button type="ghost" size="small" className="">TOKEN</Button>
                    </div>
                    <div className="text">
                        1234567890
                    </div>
                    <div >
                        <Button type="warning" size="small" className="">复制</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Receiveable;