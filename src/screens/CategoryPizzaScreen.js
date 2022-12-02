import { FlatList } from 'react-native'
import React from 'react'
import PizzaItem from '../components/PizzaItem'
import { Pizza } from '../data/pizza'


const CategoryPizzaScreen = ({ navigation, route }) => {

    const pizza = Pizza.filter(pizza => pizza.category === route.params.categoryID)

    const handleSelectedCategory = (item) => {
        navigation.navigate('', {
            productID: item.id,
            name: item.name,
        })
    }

    const renderPizzaItem = ({ item }) => (
        <PizzaItem item={item} onSelected={handleSelectedCategory} />
    )

    return (
        <FlatList
            data={pizza}
            keyExtractor={(item) => item.id}
            renderItem={renderPizzaItem}
        />
    )
}

export default CategoryPizzaScreen