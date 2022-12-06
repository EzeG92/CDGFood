import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from "../constants/colors";

import { useSelector } from 'react-redux';

const HambDetailScreen = () => {
    const hamb = useSelector((state) => state.bread.selected)


    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
        </View>
    )
}

export default HambDetailScreen

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