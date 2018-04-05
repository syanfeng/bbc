import React, { Component } from 'react';

import Header from '../Header';

class Header2 extends Component {

    constructor(props) {
        super(props);
    }

    menuClick() {
        
    }
    
    render() {
        return (
            <Header title={this.props.title} bgcolor="#10bb9d" leftText="说明" onClick={() => this.menuClick()} />
        )
    }
}

export default Header2;