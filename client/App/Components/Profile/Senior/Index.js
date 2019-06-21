import React from 'react'
import {View,  StyleSheet, Dimensions } from 'react-native'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from './SeniorDetails'

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#FFF' }]} />
);

export default class Index extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Overview' },
      { key: 'second', title: 'Applicants' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: FirstRoute,
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#244392' }}
            style={{ backgroundColor: '#E9F6FF', textTransform: 'capitalize'}}
            labelStyle={{color: '#244392'}}
            inactiveColor={'grey'}
            
          />
        )}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});





