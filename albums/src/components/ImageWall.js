import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Empty from './Empty';
import Post from './Post';
import images from '../ImageURLs';

const DIFF = 10;
const TAG = 'ImageWall';
class ImageWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            visibleCells: [],
            loadedDataFrom: 0,
            loadedDataTo: 0
        };
    }

    componentDidMount() {
        console.log(images);
        const dataSource = [];
        images.forEach((value, index) => {
            dataSource.push({
                title: `Picture ${index + 1}`,
                image: value,
                key: `${index}`
            });
        });
        this._loadMore(dataSource);
    }

    render() {
        return (
            <FlatList
                ListFooterComponent={this._footer}
                ListHeaderComponent={this._header}
                ListEmptyComponent={this._empty}
                renderItem={this._renderItem}
                refreshing={false}
                onEndReachedThreshold={0.5}
                maxToRenderPerBatch={DIFF}
                windowSize={2 * DIFF}
                onEndReached={() => this._loadMore()}
                data={this.state.visibleCells}
                keyExtractor={(item) => item.key}
            />
        );
    }

    _header = () => (this.state.dataSource.length !== 0) ? (
        <Header headerText={'Header'} />) : null;

    _empty = () => (
        <Empty />
    );

    _footer = () => (this.state.dataSource.length !== 0) ? (
        <Footer footerText={'Loading'} />) : null;

    _renderItem = (item) => (
        <Post content={item.item} />
    );

    _loadMore = (dataSource = this.state.dataSource) => {
        console.log(TAG, 'Load more');
        const { loadedDataFrom, loadedDataTo, visibleCells } = this.state;
        if (dataSource === undefined || dataSource.length === 0) {
            console.log(TAG, 'No data');
            return;
        }

        if (loadedDataTo >= dataSource.length) {
            console.log(TAG, 'Reached bottom');
        }

        const footer = (loadedDataTo + DIFF <= dataSource.length) ? loadedDataTo + DIFF : dataSource.length;
        const newVisibleCells = [];

        // accelerate the calculation but fail to refresh loaded cells
        // newVisibleCells = newVisibleCells.concat(visibleCells);
        // for (let i = loadedDataTo; i < footer; i++) {
        //     newVisibleCells.push(dataSource[i]);
        // }

        for (let i = 0; i < footer; i++) {
            newVisibleCells.push(dataSource[i]);
        }

        this.setState({
            dataSource,
            visibleCells: newVisibleCells,
            loadedDataFrom: 0,
            loadedDataTo: footer
        });
    };
}

export default ImageWall;
