import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { Button } from 'antd-mobile';

import './Mining.css';

class Mining extends Component {

    render() {
        const rankings = [
            {id: 1, name: 'vip', rank:1, bbc: 10},
            {id: 2, name: 'vip', rank:2, bbc: 10},
        ]
        return (
            <div className="mining-container">
                <div className="star-area">
                    <div className="top-left">
                        <span className="star-label">BBC:</span>
                        <span className="star-value">27.74479</span>
                    </div>
                    <div className="top-right">
                        <Link to="/bbccheats">BBC秘籍</Link>
                    </div>
                </div>
                <div className="btn-area">
                    <Button type="ghost" size="small" inline className="get-power" >获取体力</Button>
                    <Button type="ghost" size="small" inline className="coffers-link">个人金库</Button>
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