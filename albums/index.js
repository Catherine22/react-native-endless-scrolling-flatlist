/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import ImageWall from './src/components/ImageWall';

// Create a component
const App = () => (
    <ImageWall style={{ flex: 1 }} />
);

/* 
Render(an application called 'albums') it to the device.
In any react native application we create, 
we have to register at least one component to the application.
*/
AppRegistry.registerComponent('albums', () => App);
