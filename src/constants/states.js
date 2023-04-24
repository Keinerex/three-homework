import {Statuses} from "./statuses";

export const initialCartState = {
    status: Statuses.idle,
    cart: {
        price: 0,
        books: {}
    },
    favourite: {
        ids: []
    },
    username: null,
    name: null,
    surname: null,
    patronymic: null,
    email: null,
    tel: null,
    date: null,
}