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
        const records = [
            { id:1, date: '2018-03-31 10:10:01', type: '兑换', bbc: '-10.000000' },
            { id:2, date: '2018-03-31 10:10:01', type: '兑换', bbc: '-10.000000' }
        ]
        const goods = [
            {id: '001', thumb: require('../assets/imgs/phone.png'), name: 'KD876', marketPrice: '￥1666元',promotionPrice: '￥1382元+600积分'},
            {id: '002', thumb: require('../assets/imgs/phone.png'), name: 'KD876', marketPrice: '￥1666元',promotionPrice: '￥1382元+600积分'},
            {id: '003', thumb: require('../assets/imgs/phone.png'), name: 'KD876', marketPrice: '￥1666元',promotionPrice: '￥1382元+600积分'},
        ]
        return (
            <div className="coffers-container">
                <Header title="个人金库" /> 
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
                        {records.map((record) => 
                            <li className="record-list-item" key={record.id}>
                                <ul>
                                    <li>{record.date}</li>
                                    <li>{record.type}</li>
                                    <li>{record.bbc}</li>
                                </ul>
                            </li>
                        )}
                    </ul>
                    
                </div>
                <Flex className="self-mall">
                    <Flex.Item>个人商城中心</Flex.Item>
                    <Flex.Item>积分余额：4584积分</Flex.Item>
                </Flex>
                <Tabs tabs={tabs}
                    initalPage={'t2'}
                    // renderTabBar={renderTabBar}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <List className="goods-list">
                            {goods.map((good) => 
                                <Item
                                    key={good.id}
                                    thumb={good.thumb}
                                    multipleLine
                                    onClick={() => {}}>
                                    {good.name} 
                                    <Brief>
                                        <p>市场价格：<span className="market-price">{good.marketPrice}</span></p>
                                        <p>促销价格：<span className="promotion-price">{good.promotionPrice}</span></p>
                                    </Brief>
                                </Item>
                            )}
                        </List>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <List className="goods-list">
                            {goods.map((good) => 
                                <Item
                                    key={good.id}
                                    thumb={good.thumb}
                                    multipleLine
                                    onClick={() => {}}>
                                    {good.name} 
                                    <Brief>
                                        <p>市场价格：<span className="market-price">{good.marketPrice}</span></p>
                                        <p>促销价格：<span className="promotion-price">{good.promotionPrice}</span></p>
                                    </Brief>
                                </Item>
                            )}
                        </List>
                    </div>
                </Tabs>
            </div>
        )
    }
}

export default Coffers;