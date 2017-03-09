export const COMMENT = "COMMENT";
export const ADD = "ADD";
export function commented(id,e){
    return {
        type:COMMENT,
        id
    }
}
export function add(){
    return {
        type: ADD
    }
}