
import React, { Component } from 'react';
import ClipboardJS from 'clipboard';

import { Button,Toast } from 'antd-mobile';

import './Receiveable.css';
import Header2 from '../../components/Header2';

var clipboard;
class Receiveable extends Component {

    componentDidMount() {
        clipboard = new ClipboardJS('.copy');
        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);
            Toast.success('Copied!', 1.5);
            e.clearSelection();
        });
        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            Toast.fail('Copy failed!', 1.5);
        });
    }

    componentWillUnmount() {
        clipboard.destroy();
    }
    
    render() {
        return (
            <div className="receiveable-container">
                <Header2 title="收款" />
                <div className="token-area">
                    <div className="title">
                        <Button type="ghost" size="small" className="">TOKEN</Button>
                    </div>
                    <div className="text" id="token">
                        123456789012dfsdfsfsdf3456789012345678901234567890
                    </div>
                    <div >
                        <Button type="warning" size="small" className="copy" data-clipboard-target="#token">复制</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Receiveable;