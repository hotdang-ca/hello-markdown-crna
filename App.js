import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Markdown from 'react-native-markdown-renderer';

import page1 from './assets/content/01-page1.json';
import page2 from './assets/content/02-page2.json';
import page3 from './assets/content/03-page3.json';
import page4 from './assets/content/04-page4.json';

const PageComponent = ({ content }) => (
  <Markdown>
    { content }
  </Markdown>
);

const PageContainer = ({ children }) => (
  <ScrollView style={{
    height: '100%',
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  }}>
  {children}
  </ScrollView>
);

export default class App extends React.Component {
  state = {
    content: page1.content,
    index: 0,
    routes: [
      { key: 'page1', title: 'One' },
      { key: 'page2', title: 'Two' },
      { key: 'page3', title: 'Three' },
      { key: 'page4', title: 'Four' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'page1':
        return <PageContainer><PageComponent content={page1.content} /></PageContainer>;
      case 'page2':
        return <PageContainer><PageComponent content={page2.content} /></PageContainer>;
      case 'page3':
      return <PageContainer><PageComponent content={page3.content} /></PageContainer>;
      case 'page4':
      return <PageContainer><PageComponent content={page4.content} /></PageContainer>;
      default:
        return null;
    }
  }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
  },
});

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
