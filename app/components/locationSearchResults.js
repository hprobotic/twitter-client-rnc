//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const transitionProps = ['top', 'height', 'width'];

// create a component
class LocationSearchResults extends Component {
  static defaultProps = {
    visible: false,
  }
  render() {
    const {visible, onPress, children} = this.props;
    const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
    const style = {
      top: visible ? 136 : windowHeight,
      height: windowHeight,
      width: windowWidth,
    };
    return (
      <Animatable.View
        style={[styles.container, style]}
        duration={300}
        easing={"ease-out"}
        transition={transitionProps}
      >
        {children}
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
  },
});

export default LocationSearchResults;
