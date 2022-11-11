export const selectCartModule = (state) => state.cart.books;

export const selectBookCount = (state, bookId) =>
    selectCartModule(state)[bookId];

export const selectCartIds = (state) =>
    Object.keys(selectCartModule(state)).filter((elem) => selectBookCount(state, elem) > 0 )

export const selectPrice = (state) =>
    state.cart.price