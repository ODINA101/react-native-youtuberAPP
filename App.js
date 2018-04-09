/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import YouTube from 'react-native-youtube'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './components/tabOne';
import Tab2 from './components/tabTwo';
import Tab3 from './components/tabThree';
 
export default class App extends Component {
  render() {
    return (
     
     
      
      
     
     <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Text>ვიდეოები</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text>ჩატი</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Text>შესახებ</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
     
     
     
     
     
    
    );
  }
}



/* <YouTube
  videoId="MB7F6CkiJFM"   // The YouTube video ID
  play={true}             // control playback of video with true/false
  fullscreen={true}       // control whether the video should play in fullscreen or inline
  loop={true}             // control whether the video should loop when ended
  apiKey="AIzaSyC4SmRsNPyo1k0tJx6pkWvflEBusgWRFV4"
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}

  style={{ alignSelf: 'stretch', height: 350 }}
/> */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
