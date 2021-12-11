import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { getDishes } from '../redux/actionCreators';
import { useEffect } from 'react';
import MenuItem from '../Components/MenuItem';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
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
            <FlatList
                data={props.dishes}
                renderItem={
                    ({ item }) => <MenuItem item={item} />
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);