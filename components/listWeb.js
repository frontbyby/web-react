import React, { Component, PropTypes } from 'react';
import OneWeb from './oneWeb';
import Img from "./common/img";
import enhanceImg from "./common/enhanceImg";
// const EnhanceImg = enhanceImg(Img);
export default class ListWeb extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const EnhanceImg = enhanceImg(Img);
        var oneWebNode = this.props.data.map((aWB, index) => {
            return <div>
                <Img src={aWB.headUrl}/>
                <OneWeb oneData = { aWB }
                key = { index }
                onCheck = {
                    () => this.props.comments(index) }
                />
                <EnhanceImg src={aWB.headUrl}/>
            </div>
        });
        return <div> { oneWebNode } </div>  
    }
}