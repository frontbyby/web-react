
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
const comment=(state=[],action)=>{
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