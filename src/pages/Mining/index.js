import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { Button,Modal } from 'antd-mobile';

import './Mining.css';

import Star from '../../components/Star'

class Mining extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            jewels: [
                {
                    id: 1,
                    value: 0.03121,
                    top: 100,
                    left: 50
                },
                {
                    id: 2,
                    value: 0.03121,
                    top: 50,
                    left: 250
                },
                {
                    id: 3,
                    value: 0.03121,
                    top: 20,
                    left: 130
                },
                {
                    id: 4,
                    value: 0.03121,
                    top: 200,
                    left: 150
                }
            ]
        }
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true
        })
    }
    onClose = key => (e) => {
        this.setState({
            [key]: false
        })
    }
    jewelClick(jewel) {
        let jewelArr = this.state.jewels;
        let index = jewelArr.findIndex(item => item.id === jewel.id);
        jewelArr.splice(index, 1);
        this.setState({
            jewels: jewelArr
        });
    }

    render() {
        const rankings = [
            {id: 1, name: 'vip', rank:1, bbc: 10},
            {id: 2, name: 'vip', rank:2, bbc: 10},
        ]
        return (
            <div className="mining-container">
                <div className="star-area">
                    <Star height="350" />
                    <div className="top-left">
                        <span className="star-label">ETD:</span>
                        <span className="star-value">27.74479</span>
                    </div>
                    <div className="top-right">
                        <Link to="/bbccheats">BBC秘籍</Link>
                    </div>
                    <div className="jewels">
                    {this.state.jewels.map(jewel => 
                        <div className="jewel" key={jewel.id} style={{top: jewel.top, left: jewel.left}} onClick={() => this.jewelClick(jewel)}>
                            <span className="jewel-text">{jewel.value}</span>
                        </div>
                    )}
                    </div>
                </div>
                <div className="btn-area">
                    <Button type="ghost" size="small" inline className="bbc-btn-ghost get-power"
                        onClick={this.showModal('modal1')} >获取体力</Button>
                    <Modal
                        visible={this.state.modal1}
                        transparent
                        onClose={this.onClose('modal1')}
                        footer={[{ text: 'Ok', onPress: () => { this.onClose('modal1')(); } }]}
                        >
                        <div style={{ height: 100, overflow: 'scroll', lineHeight: '100px', fontSize: 18 }}>
                            该功能暂不开放
                        </div>
                    </Modal>
                    <Button type="ghost" size="small" inline className="bbc-btn-ghost coffers-link" 
                        onClick={() => this.props.history.push("/coffers")}>个人金库</Button>
                </div>
                <div className="ranking-list">
                    <div className="table">
                        <div className="table-row gray">
                            <div className="table-cell">昵称</div>
                            <div className="table-cell">排名</div>
                            <div className="table-cell">BBC</div>
                        </div>
                        {rankings.map((item) => 
                            <div className="table-row" key={item.id}>
                                <div className="table-cell">{item.name}</div>
                                <div className="table-cell">{item.rank}</div>
                                <div className="table-cell">{item.bbc}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Mining;