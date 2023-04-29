const initialState = {
    customer: ''
};

const addCustomer = (state= initialState, action) => {
    switch(action.type){
        case "ADD_CUSTOMER":
            return {
                ...state,
                customer: localStorage.getItem('CustomerDetails')
            }
        default: 
        return state
    }
}

export default addCustomer;