import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { getDishes } from '../redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        dishes = state.dishes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes()),
    }
}

function MenuScreen(props) {
    useEffect(() => {
        props.getDishes();
    }, []);
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button color='rgba(53, 173, 177, 0.9)' onPress={() => props.navigation.navigate('Dish Detail')} title="Press" />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
