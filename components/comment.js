import React,{ Component, PropTypes } from 'react';

export default class ContentImg extends Component{
    render() {
        return <div>
                <div className="pic-left">
                    <img src={this.props.comment.headUrl} alt="头像" className="nick-img"/>
                </div>
                <div className="rf pic-left">
                    <textarea cols="30" rows="5"></textarea>
                </div>
        </div>
    }
}