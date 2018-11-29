import React from 'react';
import { Text, View } from 'react-native';

const Empty = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>No data</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
};

export default Empty;
