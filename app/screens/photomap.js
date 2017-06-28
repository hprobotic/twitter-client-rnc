import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';
import ImagePicker from 'react-native-image-picker';
import Lightbox from 'react-native-lightbox';
import styles from '../styles';
import picker from '../resources/images/picker.png';
import { LocationSearchHeader } from '../components';

const region = {
  latitude: 10.8231,
  longitude: 106.6297,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const coordinate = {
  latitude: 10.8231,
  longitude: 106.6297,
};

class PhotoMap extends Component {
  state = {
    searchResultsOpen: false,
    sourceText: 'Work',
    destinationText: '',
  }
  render() {
    const {searchResultsOpen, sourceText, destinationText, region, position} = this.state;
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
        region={region}
        >
        <LocationSearchHeader
          onPress={this.toggleSearchResults}
          expanded={searchResultsOpen}
          sourceText={sourceText}
          destinationText={destinationText}
          onSourceTextChange={this.onSourceTextChange}
          onDestinationTextChange={this.onDestinationTextChange}
        />
        <MapView.Marker coordinate={coordinate}
        image={picker}
        >
            <MapView.Callout style={{ alignItems: 'center', justifyContent: 'center'}}
            tooltip={false}
            >
              <Lightbox
                  renderContent={() => {
                    return (<Image source={{ uri: 'https://images.unsplash.com/photo-1476412555281-07839260e654?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg='}}
                          style={{
                            flex: 1,
                          }}
                    />);
                  }}>
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1476412555281-07839260e654?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg='}}
                        style={{
                          flex: 1,
                          height: 60,
                          left: 0,
                          right: 0,
                        }}
                  />
              </Lightbox>
              <Text style={{ fontSize: 12}}>
                This is maker view
              </Text>
            </MapView.Callout>
        </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

export default PhotoMap;
