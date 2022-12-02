import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const HambItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity
            onPress={() => onSelected(item)}>
            <View style={styles.hambItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                    <Text style={styles.details}>{item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HambItem

const styles = StyleSheet.create({
    hambItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: Colors.secondary,
    },

    title: {
        fontSize: 20,
        fontFamily: 'Anybody2',
    },

    details: {
        fontSize: 18,
    }
})