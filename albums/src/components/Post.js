import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardSection, Button } from './common';

class Post extends Component {

    static defaultPropTypes = {
        content: PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.string,
            key: PropTypes.string
        })
    };

    static defaultProps = {
        content: {
            title: 'no title',
            image: '',
            key: '-1'
        }
    };

    render() {
        const { title, image } = this.props.content;
        const {
            headerTextStyle,
            headerContentStyle,
            imageStyle
        } = styles;

        return (
            <Card>
                <CardSection>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={imageStyle} source={{ uri: image }} />
                </CardSection>

                <CardSection>
                    <Button onPress={() => console.log('button pressed')}>Download</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default Post;
