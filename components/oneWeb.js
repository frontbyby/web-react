import React, { Component } from 'react';
import ContentImgs from './contentImg';
import Comment from './comment';
export default class OneWeb extends Component {
    render() {
            const { oneData, onCheck } = this.props;
            var comment, Img;
            if (!!oneData.isComment) {
                comment = < Comment comment = { oneData }
                />
            }
            if (!!oneData.contentImgUrls) {
                Img = < ContentImgs contentImgUrls = { oneData.contentImgUrls }
                />
            }
            return <div className = "big-center" >
                <
                div className = "oneweb " >
                <
                div className = "clearfix" >
                <
                div className = "ow-left" >
                <
                img className = "nick-img"
            src = { oneData.headUrl }
            /> < /
            div > <
                div className = "ow-right" >
                <
                div className = "ow-nick row" >
                <
                span > { oneData.nickName } < /span> < /
            div > <
                div className = "ow-content row" > { oneData.content } < /div> { Img } < /
            div > <
                /div> <
            div className = "ow-footer row " >
                <
                ul className = "clearfix"
            onClick = { onCheck } >
                <
                li className = "li-side-border" > < span > 收藏 < /span> {oneData.NoCollect}</li >
                <
                li className = "li-side-border" > < span > 转发 < /span> {oneData.NoForward}</li >
                <
                li className = "li-side-border" > < span > 评论 < /span> {oneData.NoComment}</li >
                <
                li > < span > 赞 < /span> {oneData.NoPointGreat}</li >
                <
                /ul> < /
            div > <
                /div> { comment } < /
            div > ;
        }
        //  handlerForwardClick(e) {
        //     console.log(e.target.innerText)
        //       if(e.target.innerText.indexOf('收藏')>-1){ 
        //         this.setState(Object.assign(oneData,{NoCollect:oneData.NoCollect+1}))
        //       }
        //       if(e.target.innerText.indexOf('转发')>-1){
        //         this.setState(Object.assign(oneData,{NoForward:oneData.NoForward+1}))
        //       }
        //       if(e.target.innerText.indexOf('评论')>-1){
        //         this.setState({isComment:!this.state.isComment})
        //       }
        //       if(e.target.innerText.indexOf('赞')>-1){
        //         this.setState(Object.assign(oneData,{NoPointGreat:oneData.NoPointGreat+1}))
        //       }
        // }
}