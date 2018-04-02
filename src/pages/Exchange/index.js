import React, { Component } from 'react';

import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

import './Exchange.css';

import Header from '../../components/Header';
import ListInputItem from '../../components/ListInputItem';

class Exchange extends Component {
    
    render() {
        return (
            <div>
                <Header title="exchangePage" />
                <WhiteSpace />
                <div className="form-list">
                    <ListInputItem label="兑换积分数" placeholder="购买积分数" left="现有积分：4000" />
                    <ListInputItem label="耗用BBC" placeholder="好用增币数" left="可用BBC：34000" />
                </div>
                <WhiteSpace size="xl"/>
                <WingBlank>
                    <Button type="primary">确定购买</Button>
                </WingBlank>
                <WhiteSpace size="xl"/>
                <WingBlank className="rules">
                    <p>兑换规则：</p>
                    <p>目前一个BBC兑换10个商城积分</p>
                </WingBlank>
            </div>
        )
    }
}

export default Exchange;