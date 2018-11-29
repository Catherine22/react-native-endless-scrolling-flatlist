# react-native-endless-scrolling-flatlist
Scrolling to load 10 more items with [FlatList].    

![video](https://raw.githubusercontent.com/Catherine22/react-native-endless-scrolling-flatlist/master/flatlist.gif)  

## code
In [ImageWall],   

1. Set how many items we are going to load
```JavaScript
const DIFF = 10;
```

2. Initialise the state
```JavaScript
constructor(props) {
    super(props);
    this.state = {
        dataSource: [],
        visibleCells: [],
        loadedDataFrom: 0,
        loadedDataTo: 0
    };
}
```

2. Set the FlatList   
```JavaScript
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
```

3. Load more
```JavaScript
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
```

> Notice:
```ListFooterComponent```, ```ListHeaderComponent``` and ```ListEmptyComponent``` are optional.   

# License

```
Copyright 2018 Catherine Chen (https://github.com/Catherine22)

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
```

[FlatList]:<https://facebook.github.io/react-native/docs/flatlist>
[ImageWall]:<https://github.com/Catherine22/react-native-endless-scrolling-flatlist/blob/master/albums/src/components/ImageWall.js>
