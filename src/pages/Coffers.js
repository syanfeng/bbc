import React, { Component } from 'react';

import { Button, Flex, Grid, WingBlank, List, Tabs } from 'antd-mobile';

import './Coffers.css';

import Header from '../components/Header';

const Item = List.Item;
const Brief = Item.Brief;


class Coffers extends Component {
    
    render() {
        let data = [
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
                text: `收款`,
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
                text: `付费`,
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
                text: `兑换`,
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
                text: `提现`,
            }
        ];
        const tabs = [
            { title: '积分商城' },
            { title: '商户联盟' },
          ];
        return (
            <div className="coffers-container">
                <Header title="个人金库"/> 
                <Flex className="coffers-header" align="start">
                    <div className="user-pic">
                        <img src={require('../assets/imgs/pic.png')} />
                    </div>
                    <Flex.Item>
                        <h4>BBC余额：46416</h4>
                        <p>挖矿</p>
                    </Flex.Item>
                    <div>挖矿</div>
                </Flex> 
                <Grid data={data} />
                <div className="record-container">
                    <h3 className="record-header">交易记录</h3>
                    <ul className="record-list">
                        <li className="record-list-hd">
                            <ul>
                                <li>交易时间</li>
                                <li>类型</li>
                                <li>BBC</li>
                            </ul>
                        </li>
                        <li className="record-list-item">
                            <ul>
                                <li>2018-03-39 15:20:00</li>
                                <li>兑换</li>
                                <li>-10.000000</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Tabs tabs={tabs}
                    initalPage={'t2'}
                    // renderTabBar={renderTabBar}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <List className="goods-list">
                            <Item
                                thumb={require('../assets/imgs/phone.png')}
                                multipleLine
                                onClick={() => {}}>
                                KD876 
                                <Brief>
                                    <p>市场价格：<span className="market-price">￥1666元</span></p>
                                    <p>促销价格：<span className="promotion-price">￥1382元+600积分</span></p>
                                </Brief>
                            </Item>
                            <Item
                                thumb={require('../assets/imgs/phone.png')}
                                multipleLine
                                onClick={() => {}}>
                                飞利浦 
                                <Brief>
                                    <p>市场价格：<span className="market-price">￥1666元</span></p>
                                    <p>促销价格：<span className="promotion-price">￥1382元+600积分</span></p>
                                </Brief>
                            </Item>
                        </List>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                </Tabs>
                
            </div>
        )
    }
}

export default Coffers;