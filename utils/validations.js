'use strict'

export const checkDates = (data, userId) => {
    if (userId) {
        if (Object.entries(data).length === 0 ||
            data.password ||
            data.password == '' ||
            data.role ||
            data.role == '') return false
        return true
    } else {
        if (Object.entries(data).length === 0) return false
        return true
    }
}

export const dataProduct = (data) => {
    if(Object.entries(data).length === 0 ||
        data.category ||
        data.stock ||
        data.average) return false
        return true
}