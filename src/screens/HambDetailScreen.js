import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from "../constants/colors";

const HambDetailScreen = () => {
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