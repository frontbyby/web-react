import React,{ Component,PropTypes} from 'react';
import OneWeb from './oneWeb.jsx';
export default class ListWeb extends Component {
    constructor(props){
        super(props);
        var  data=[
            {
                headUrl:'http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png',
                nickName:'Chears',
                content:'这是第一次学react,借鉴了的博客园-石沉溪涧的代码,在此基础用了redux',
                NoCollect:132,
                NoForward:202,
                NoComment:142,
                NoPointGreat:423,
                contentImgUrls:[
                "http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png",
                "http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png"
                ]
            },
            {
                headUrl:'http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png',
                nickName:'MLGB',
                content:'点击事件处理还要再做处理',
                NoCollect:132,
                NoForward:202,
                NoComment:142,
                NoPointGreat:423,
                contentImgUrls:[
                "http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png",
                "http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png"
                ]
            }
        ];
       Object.assign(this.props.data,data)
    }
    render() {
        
        var oneWebNode = this.props.data.map( (aWB,index ) => {
            return <OneWeb oneData={ aWB } key= {index} onCheck={ ()=>this.props.comments(index) }/>
        });
        return <div>
                    {oneWebNode}
                </div>  
    }
}