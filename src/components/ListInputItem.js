import React, { Component } from 'react';

import { Button } from 'antd-mobile';

import './ListInputItem.css';

class ListInputItem extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div className="form-list-item">
                <div className="form-list-line">
                    <div className="input-label">{this.props.label}</div>
                    <div className="input"><input type="number" placeholder={this.props.placeholder} /></div>
                    <div className="form-list-ft">{this.props.left}</div>
                </div>
            </div>
        )
    }
}

export default ListInputItem;