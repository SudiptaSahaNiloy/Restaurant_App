import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';


function DishDetail(props) {
    const dish = props.route.params.dish;
    return (
        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description}>{dish.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 300,
    },
    name: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 30,
        marginBottom: 20,
    },
    description: {
        fontSize: 20,
        color: '#6e6969',
    }
})

export default DishDetail
