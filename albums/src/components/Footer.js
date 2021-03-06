import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Footer = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.footerText}</Text>
        </View>
    ); 
};

Footer.defaultPropTypes = {
    footerText: PropTypes.string.isRequired
};

Footer.defaultProps = {
    footerText: 'Default footer'
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Footer;
