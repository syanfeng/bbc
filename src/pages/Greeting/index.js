import React, { Component } from 'react';

import { Button } from 'antd-mobile';

// import preImage from '../../utils/preImage.js'

import './Greeting.css';
var timer = null;
class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: '568px'
        }
    }

    componentDidMount() {
        // timer = setTimeout(() => {
        //     this.props.history.push("/mining");
        // }, 2000)
        var cvs = document.getElementById("canvas");
        var mwidth = document.body.clientWidth;//目标宽度  
        var mhigth = document.body.clientHeight;//目标高度 
        var d = 640/mwidth;

        var imgbg = new Image();
        imgbg.src = require('../../assets/images/P23456picbg.jpg')
        
        imgbg.onload = function(){
            imgbg.width = document.body.clientWidth;
            imgbg.height = document.body.clientHeight;
            console.log(imgbg.width)
            console.log(imgbg.height)
            var ctx = cvs.getContext('2d');
            // ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
            ctx.drawImage(this, 0, 0, 640/d, 1108/d);//改变图片的大小到1024*768
        }
        var imgObj = new Image();
        imgObj.src = require('../../assets/images/P2picplant.png');
        imgObj.onload = function(){
            var ctx = cvs.getContext('2d');
            // ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
            ctx.drawImage(this, 0, 0, 640/d, 1108/d);//改变图片的大小到1024*768
        }
        var imgObj2 = new Image();
        
            var imgArr = [];
            for(let i=0; i< 50; i++) {
                var img = new Image();
                if(i > 9 ){
                    img.src = require('../../assets/images/P2mcloop_0'+i+'.png');
                } else {
                    img.src = require('../../assets/images/P2mcloop_00'+i+'.png');
                }
                img.onload = function() {
                    imgArr.push(this);
                }
            }
            let x = 0;
            setInterval(() => {
                var ctx = cvs.getContext('2d');
                ctx.clearRect(0, 0, cvs.width,cvs.height);  
                ctx.drawImage(imgbg, 0, 0, 640/d, 1108/d);//改变图片的大小到1024*768
                ctx.drawImage(imgObj, 0, 0, 640/d, 1108/d);//改变图片的大小到1024*768
                
                if(imgArr[x]) {
                    ctx.drawImage(imgArr[x], 0, 0, 640/d, 1108/d);//改变图片的大小到1024*768
                }
                x++;
                if(x == 50) {
                    x = 0;
                }
            }, 100)
        
        
    }

    componentWillUnmount() {
        clearTimeout(timer);
        timer = null;
    }
    
    render() {
        var height = document.body.clientHeight + 'px';
        return (
            <div className="flex-container greeting">
                <canvas id="canvas" height={height} style={{width: '100%'}}></canvas>
                <h3 className="greeting-title">【 以太站 】</h3>
                <div className="greeting-content">
                    <p>每天人类接受来自宇宙的能量</p>
                    <p>每两小时出现一枚以太钻</p>
                    <p>它的价值与日俱增...</p>
                </div>
                
            </div>
        )
    }
}

export default Greeting;