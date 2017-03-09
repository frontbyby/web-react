import React,{ Component, PropTypes } from 'react';

export default class ContentImg extends Component{
    render() {
        return <div>
            <ul>
                {
                    this.props['contentImgUrls'].map( (oneImg,index) => {
                        return <li key={index} className="pic-left">
                            <img src={oneImg} alt=""className="nick-img"/>
                        </li>
                    } )
                }
            </ul>
        </div>
    }
}