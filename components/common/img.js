import React, {Component} from "react";
import enhanceImg from "./enhanceImg"
// @enhanceImg; 需要加入es7
class Img extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {src} = this.props;
        return <img src={src} onClick ={this.props.onClick}/>
    }
}

// export default enhanceImg(Img)
export default Img