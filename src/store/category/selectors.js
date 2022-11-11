export const selectCategoryModule = (state) =>
    state.category;

export const selectCategories = (state) =>
    Object.values(selectCategoryModule(state).entities)

export const selectCategoryBookIds = (state, categoryId) =>
    selectCategoryModule(state).entities[categoryId]?.books;

export const selectCategoryIds = (state) =>
    Object.values(selectCategoryModule(state).entities)