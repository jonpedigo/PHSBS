'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;

var PHSBS = React.createClass({
  statics: {
    title: '<ListView> - Simple',
    description: 'Performant, scrollable list of data.'
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  render: function() {
    return (

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} />
    );
  },

  _renderRow: function(text: {}, sectionID: number, rowID: number) {

    console.log(text, sectionID, rowID);
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.text}>
            {text.from} {text.message}
            </Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  texts: [
    {from: "joe", message: "hi"},
    {from: "jon", message: "ur a fool"}
  ],

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {


    return this.texts;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },
});

var THUMB_URLS = [
  'Thumbnails/like.png',
  'Thumbnails/dislike.png',
  'Thumbnails/call.png',
  'Thumbnails/fist.png',
  'Thumbnails/bandaged.png',
  'Thumbnails/flowers.png',
  'Thumbnails/heart.png',
  'Thumbnails/liking.png',
  'Thumbnails/party.png',
  'Thumbnails/poke.png',
  'Thumbnails/superlike.png',
  'Thumbnails/victory.png',
  ];
var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

AppRegistry.registerComponent('PHSBS', () => PHSBS);