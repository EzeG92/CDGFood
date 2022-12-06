import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from "../constants/colors";

import { useSelector } from 'react-redux';

const ProductsDetailScreen = () => {
    const products = useSelector((state) => state.products.selected)


    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
        </View>
    )
}

export default ProductsDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Anybody2',
        marginTop: 50,
    }
})