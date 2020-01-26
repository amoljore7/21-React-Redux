const INITIAL_STATE={
    name:"Amol",
    filght_Get_Data:['eat','code'],
}
const reducer =(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'Change_Name':
        const obj1 = Object.assign({},state,{ name:action.payload });
        return obj1;

        
        case 'GetData':
        const obj2 = Object.assign({},state, {filght_Get_Datar:action.payload});
        return obj2;

        default:
            return state;
    }
}

export default reducer;