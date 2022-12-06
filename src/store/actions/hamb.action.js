export const Selected_Hamb = 'Selected_Hamb'
export const Filtered_Hamb = 'Filtered_Hamb'

export const selectHamb = (id) => ({
    type: Selected_Hamb,
    hambID: id,

})

export const filteredHamb = () => ({
    type: Filtered_Hamb,
    categoryID: id,
})