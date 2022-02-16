const loggedReducer=(state=false, action:any) =>{
    switch(action.type) {
        case "SIGN_IN":
            state=true;
            break;
        case "SIGN_OUT":
            state=false;
            break;
    }
    return state
}

export default loggedReducer;