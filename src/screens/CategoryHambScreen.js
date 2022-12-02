import { FlatList } from 'react-native'
import React from 'react'
import HambItem from '../components/HambItem'
import { Hamb } from '../data/hamb'


const CategoryHambScreen = ({ navigation, route }) => {

    const hamb = Hamb.filter(hamb => hamb.category === route.params.categoryID)

    const handleSelectedCategory = (item) => {
        navigation.navigate('Detalle', {
            productID: item.id,
            name: item.name,
        })
    }

    const renderHambItem = ({ item }) => (
        <HambItem item={item} onSelected={handleSelectedCategory} />
    )

    return (
        <FlatList
            data={hamb}
            keyExtractor={(item) => item.id}
            renderItem={renderHambItem}
        />
    )
}

export default CategoryHambScreen
