export function toggleIsAdding(){
    return { type: 'TOGGLE_ISADDING'};
}
 
export function addWord(en, vn){
    return {type: 'ADD_WORD', en, vn};
}