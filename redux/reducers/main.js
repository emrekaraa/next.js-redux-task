import * as types from '../types';

const main = (state = {
    formInfo: {
        name: "",
        email: "",
        phone: "",
        instagram: "",
        country: "Turkey",
        isProductUse: false,
        isMember: false,
        bodySize: "",
        about: "",
    },
}, action) => {
    switch (action.type) {
        case types.SET_FORM:
            return {
                ...state, formInfo: action.payload
            }
        default:
            return state;
    }
}

export default main