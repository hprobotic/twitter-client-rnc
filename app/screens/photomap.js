import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';
import ImagePicker from 'react-native-image-picker';
import Lightbox from 'react-native-lightbox';
import { connect } from 'react-redux';
import styles from '../styles';
import picker from '../resources/images/picker.png';
import { LocationSearchHeader, LocationSearchResults, SearchResultsList, NavigationIcon } from '../components';


const mapStateToProps = (state) => ({
  recentLocations: state.recentLocations,
  shortcutLocations: state.recentLocations.slice(0, 3),
});

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
    yelpToken: 'a9MzwEfTK-duK-I9P_Wty-IH8LnLs8USoQQDTFVt_7Yg6J0NtavbQeQE-1_nIsDa8hJCToAcYxoi8tDRMupvcgqR0M_5kWcLMsCeRvcXnWy4o1G8nwQpVqCqn59TWXYx',
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        const { latitude, longitude } = coords;
        this.setState({
          currentPosition: {
            latitude,
            longitude,
          },
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
      },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  toggleSearchResults = () => {
    const {searchResultsOpen} = this.state;

    this.setState({
      searchResultsOpen: !searchResultsOpen,
      currentPosition: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    });
  }
  render() {
    const { recentLocations, shortcutLocations } = this.props;
    const { searchResultsOpen, sourceText, destinationText, region, currentPosition } = this.state;
    return (
      <View style={styles.container}>
        <NavigationIcon
          icon={searchResultsOpen ? 'arrow-left' : 'hamburger'}
          onPress={this.toggleSearchResults}
        />
        <LocationSearchHeader
          onPress={this.toggleSearchResults}
          expanded={searchResultsOpen}
          sourceText={sourceText}
          destinationText={destinationText}
          onSourceTextChange={this.onSourceTextChange}
          onDestinationTextChange={this.onDestinationTextChange}
        />
        <LocationSearchResults visible={searchResultsOpen}>
          <SearchResultsList list={recentLocations}/>
        </LocationSearchResults>
        <MapView style={styles.map}
        region={region}
        >
        {currentPosition && (
            <MapView.Circle
              center={currentPosition}
              radius={300}
              strokeColor={'transparent'}
              fillColor={'rgba(231, 76, 60, 0.5)'}
            />
          )}
          {currentPosition && (
            <MapView.Circle
              center={currentPosition}
              radius={100}
              strokeColor={'transparent'}
              fillColor={'#e74c3c'}
            />
          )}
        </MapView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(PhotoMap);
