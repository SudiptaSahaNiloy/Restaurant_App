import React from 'react';
import { View, Text, Button } from 'react-native';

function MenuScreen(props) {
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button color='rgba(53, 173, 177, 0.9)' onPress={() => props.navigation.navigate('Dish Detail')} title="Press" />
        </View>
    )
}

export default MenuScreen
