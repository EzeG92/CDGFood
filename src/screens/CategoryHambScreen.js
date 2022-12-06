import { FlatList } from 'react-native'
import React from 'react'
import HambItem from '../components/HambItem'
import { Hamb } from '../data/hamb'

import { useSelector, useDispatch, connect } from 'react-redux'
import {filteredHamb, selectHamb} from '../store/actions/hamb.action'
import { useEffect } from 'react'


const CategoryHambScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.categories.selected)
    const categoryHamb = useSelector ((state) => state.hamb.filteredHamb)

    useEffect(() => {
        console.log(category.id)
        dispatch(filteredHamb(category.id));
    }, [])
    

    // const hamb = Hamb.filter(hamb => hamb.category === route.params.categoryID)

    const handleSelectedCategory = (item) => {
        dispatch(selectHamb(item.id))
        navigation.navigate('Detalle', {
            name: item.name,
        })
    }

    const renderHambItem = ({ item }) => (
        <HambItem item={item} onSelected={handleSelectedCategory} />
    )

    return (
        <FlatList
            data={categoryHamb}
            keyExtractor={(item) => item.id}
            renderItem={renderHambItem}
        />
    )
}

export default connect()(CategoryHambScreen)
