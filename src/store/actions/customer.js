export function addCustomer(customer){
    return {
        type: "ADD_CUSTOMER",
        payload: customer
    }
}