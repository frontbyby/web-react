import React, {Component} from "react";//React 不再{}内，防止被坑，回报CreateElement of undefined
function enhanceImg(EnhanceComponent) {//EnhanceComponent 命名不可以随便命名，要大驼峰
    return class extends Component {
        constructor(props){
            super(props);
            this.state={
                src: this.props.src
            }
            this.change = this.change.bind(this);
        }
        change() {
            this.setState({
                src: this.state.src === " " ? this.props.src : " "
            })
        }
        render() {
            return <EnhanceComponent src={this.state.src} onClick={this.change}/>
        }
    }
}

export default enhanceImg;