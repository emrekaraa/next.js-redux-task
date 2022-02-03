import * as type from "../types"

export const setReduxForm = (formInfo) => ({

    type: type.SET_FORM,

    payload: {
        name: formInfo.name,
        email: formInfo.email,
        phone: formInfo.phone,
        instagram: formInfo.instagram,
        country: formInfo.country,
        isProductUse: formInfo.isProductUse,
        isMember: formInfo.isMember,
        bodySize: formInfo.bodySize,
        about: formInfo.about,
    }

})

