import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';

function MenuItem(props) {
    return (
        <TouchableHighlight onPress={props.selectDish}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: props.item.image }} />
                <View style={styles.details}>
                    <Text style={styles.name}>{props.item.name}</Text>
                    <Text style={styles.description} numberOfLines={3}>
                        {props.item.description}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 140,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 15, height: 14 }
    },
    name: {
        fontWeight: '500',
        fontSize: 17,
        marginBottom: 5,
    },
    description: {
        fontSize: 15,
        color: '#6e6969',
    }
})

export default MenuItem
