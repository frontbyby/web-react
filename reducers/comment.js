const initialState = [{
    headUrl: 'http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png',
    nickName: 'Chears',
    content: '这是第一次学react,借鉴了的博客园-石沉溪涧的代码,在此基础用了redux',
    NoCollect: 132,
    NoForward: 202,
    NoComment: 142,
    NoPointGreat: 423,
    contentImgUrls: [
        "http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png",
        "http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png"
    ]
},
{
    headUrl: 'http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png',
    nickName: 'MLGB',
    content: '点击事件处理还要再做处理',
    NoCollect: 132,
    NoForward: 202,
    NoComment: 142,
    NoPointGreat: 423,
    contentImgUrls: [
        "http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png",
        "http://imgcache.gtimg.cn/vipstyle/game/act/alyl/150035/img/border.png"
    ]
}
];
const todo=(state={},action,index)=>{

    switch (action.type) {
        case 'COMMENT' :
        if(action.id === index){
            return  Object.assign({},state,{
             isComment:!state.isComment
            })
        }
        
        default: 
        return state;
    }
}
const comment=(state=initialState,action)=>{
    switch (action.type) {
        case 'COMMENT' :
        return state.map((t,index) => 
            todo(t,action,index)
        )
        default: 
        return  state;
    }
}
export default comment;