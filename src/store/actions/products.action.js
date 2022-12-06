export const Selected_Products = 'Selected_Products'
export const Filtered_Products = 'Filtered_Products'

export const selectProducts = (id) => ({
    type: Selected_Products,
    hambID: id,

})

export const filteredProducts = (id) => ({
    type: Filtered_Products,
    categoryID: id,
})