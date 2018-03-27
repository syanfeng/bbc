import React, { Component } from 'react';

import { Button, Icon, WingBlank } from 'antd-mobile';

import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header className="flex-container header">
                <a href="javascript:history.back();" className="back">
                    <Icon type="left" />
                </a>
                <div className="title">{this.props.title}</div>
                <a href="javascript:void(0)" className="menu">
                    <Icon type="ellipsis" />
                </a>
            </header>
        )
    }
}

export default Header;