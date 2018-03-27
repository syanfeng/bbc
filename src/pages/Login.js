import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { Button, WhiteSpace,WingBlank, InputItem, Checkbox } from 'antd-mobile';

import './Login.css';

import Header from '../components/Header';

const AgreeItem = Checkbox.AgreeItem;
 
class Login extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="login-page">
                <Header title="登录"/>
                <WhiteSpace />
                <div className="form">
                    <InputItem
                        placeholder="输入用户名"
                        ref={el => this.labelFocusInst = el}
                    >用户名</InputItem>
                    <InputItem
                        type="password"
                        placeholder="输入密码"
                    >密码</InputItem>
                    <AgreeItem className="remember" data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        记住本次登录
                    </AgreeItem>
                    <WingBlank><Button type="primary">立即登录</Button></WingBlank>
                </div>
                <WhiteSpace size="lg"/>
                <WingBlank>
                    <div className="forget-register">
                        <Link to="/register" className="register-btn">免费注册</Link>
                        <Link to="/forgetpassword" className="forget-btn">找回密码</Link>
                    </div>
                </WingBlank>
                <WingBlank className="third-area">
                    <p>使用合作账号登录</p>
                    <WhiteSpace />
                    <i className="iconfont icon-qq"></i>
                    <i className="iconfont icon-weibo"></i>
                </WingBlank>
            </div>
        )
    }
}

export default Login;