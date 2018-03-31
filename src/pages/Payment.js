import React, { Component } from 'react';

import { Button, InputItem, WingBlank} from 'antd-mobile';

import './Payment.css';

import Header2 from '../components/Header2';

class Payment extends Component {


    buttonMouseDown(e) {
        console.log(e.target)
    }
    
    render() {
        return (
            <div className="payment-container">
                <Header2 title="付款" />
                <div className="pay-form">
                    <InputItem
                        placeholder="付款地址"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="资金密码"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                </div>
                <WingBlank>
                    <Button type="primary" className="bbc-btn bbc-btn-blue" style={{width: '70%'}}>确认付款</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Payment;