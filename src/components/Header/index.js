import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Icon } from 'antd-mobile';

import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    menuClick(e) {
        console.log("menuclick")
        if(this.props.onClick) {
            this.props.onClick()
            return ;
        }
        // 默认菜单事件
        // TODO
        this.props.history.push('/login')
    }
    
    render() {
        let leftDom = <Icon type="ellipsis" />;
        if(this.props.leftText) {
            leftDom = this.props.leftText;
        }

        return (
            <header className="flex-container header" style={{"backgroundColor":this.props.bgcolor}}>
                <a href="javascript:history.back();" className="back">
                    <Icon type="left" />
                </a>
                <div className="title">{this.props.title}</div>
                <Link to="/login" className="menu">{leftDom}</Link>
                {/* <a href="javascript:void(0)" className="menu" onClick={(e) => this.menuClick(e)}>
                    {leftDom}
                </a> */}
            </header>
        )
    }
}

export default Header;