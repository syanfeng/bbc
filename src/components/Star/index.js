import React, { Component } from 'react';

import { Button } from 'antd-mobile';

// import preImage from '../../utils/preImage.js'

class Star extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: '568px',
            loop: []
        }
    }

    componentDidMount() {
        
        var cvs = document.getElementById("canvas");
        var mwidth = document.body.clientWidth;//目标宽度  
        var mhigth = this.props.height;//目标高度 
        var d = 640/mwidth;
        let offsetX = -20;
        let offsetY = -120;

        var imgbg = new Image();
        imgbg.src = require('../../assets/images/P23456picbg.jpg')
        
        imgbg.onload = () => {
            imgbg.width = document.body.clientWidth;
            imgbg.height = this.props.height;
            var ctx = cvs.getContext('2d');
            // ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
            ctx.drawImage(imgbg, 0, 0, 640/d, mhigth/d);//改变图片的大小到1024*768
        }
        var imgObj = new Image();
        imgObj.src = require('../../assets/images/P2picplant.png');
        imgObj.onload = function(){
            var ctx = cvs.getContext('2d');
            // ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
            ctx.drawImage(this, 0, 0, 640/d, mhigth/d);//改变图片的大小到1024*768
        }
            var imgArr = [];
            var promiseArr = []
            for(let i=0; i< 50; i++) {
                let promise = new Promise((resolve, reject) => {
                    let img = new Image();
                    if(i > 9 ){
                        img.src = require('../../assets/images/P2mcloop_0'+i+'.png');
                    } else {
                        img.src = require('../../assets/images/P2mcloop_00'+i+'.png');
                    }
                    img.onload = () => {
                        resolve(img)
                    }
                })
                promiseArr.push(promise); 
            }
            Promise.all(promiseArr).then((...arr) => {
                imgArr = arr[0];
                let x = 0;
                setInterval(() => {
                    var ctx = cvs.getContext('2d');
                    ctx.clearRect(0, 0, cvs.width,cvs.height);  
                    ctx.drawImage(imgbg, 0, 0, 640/d, 1108/d);//改变图片的大小到1024*768
                    ctx.drawImage(imgObj, offsetX, offsetY, 640/d, 1108/d);//改变图片的大小到1024*768
                    if(imgArr[x]) {
                        ctx.drawImage(imgArr[x], offsetX, offsetY, 640/d, 1108/d);//改变图片的大小到1024*768
                    }
                    x++;
                    if(x == 50) {
                        x = 0;
                    }
                }, 80)

            })
    }
    
    render() {
        var height = this.props.height + 'px';
        return (
            <div className="star-content" style={{height: height, width: '100%', overflow:'hidden'}}>
                <canvas id="canvas" height={height} style={{width: '100%'}}></canvas>
            </div>
        )
    }
}

export default Star;