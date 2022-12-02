import { FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { Categories } from '../data/categories'


const CategoriesScreen = ({ navigation }) => {

    const handleSelectedCategory = (item) => {
        navigation.navigate('Hamburguesas', {
            categoryID: item.id,
            name: item.title,
        })

        navigation.navigate('Pizzas', {
            categoryID: item.id,
            name: item.title,
        })
    }


    const renderGridItem = ({ item }) => (
        <GridItem
            item={item}
            onSelected={handleSelectedCategory}/>
    )


    return (
        <FlatList
            data={Categories}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen
