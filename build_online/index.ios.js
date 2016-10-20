import React, { Component, PropTypes } from 'react';

import {
Alert,
AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
   TextInput,
  View,
  NavigatorIOS,
  Navigator,
    ActivityIndicator,
    TouchableHighlight,
  ListView,
  Image
} from 'react-native';



//make up data for mcdonalds in chicago


const add_data = [ {
            "location": {
                  "street": "600 N Clark St",
                  "city": "chicago",
                  "state": "illinois",
                  "postcode": 60615
          },

          "image":'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbcj7ZwYEfagM-SJgzhDONhVKqcATqR8OriUn9EM4KQ0_kZP4rX5L3iQ',

          "phone": "(312) 867-0455",
          "cell": "open 24 hr",
           "food": "http://mcdonalds-prod-sites-us.adobecqms.net/content/dam/McDonalds/item/t-mcdonalds-McDouble.png",
           "fact": "McDonald’s opens a new restaurant every four hours"
    },

          {
            "location": {
              "street": "10 E Chicago Ave",
              "city": "chicago",
              "state": "illinois",
              "postcode":  60615
            },
            "image":'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJD4cyNMoLrix8ac65G6L1gXj6iv4dvxvS_0Wc4Pvejx43kYsFuLSl_Q',
            "phone": "(312) 649-9262",
            "fact": "Top 10 busiest McDonald’s restaurants are all in Hong Kon",
            "cell": "open 24 hr",

            "food":"http://mcdonalds-prod-sites-us.adobecqms.net/content/dam/McDonalds/item/t-mcdonalds-McDouble.png"
          },
            {
              "location":{
                "street": "36 W Randolph St",
                "city": "chicago",

                "state": "illinois",
                "postcode": 60615

              },
              "image":'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbcj7ZwYEfagM-SJgzhDONhVKqcATqR8OriUn9EM4KQ0_kZP4rX5L3iQ',
              "phone": "(312) 944-5665",
              "cell": "Open until 11:00 PM",
              "fact": "The original McDonald’s menu did not offer French fries",
              "food": "http://mcdonalds-prod-sites-us.adobecqms.net/content/dam/McDonalds/item/t-mcdonalds-McDouble.png"

            },

            {
              "location":{
                "street": "36 W Randolph St",
                "city": "chicago",

                "state": "illinois",
                "postcode": 60615

              },
              "image":'http://icons.iconarchive.com/icons/icons8/ios7/512/Food-Vegetarian-Food-icon.png',
              "phone": "(312) 944-5665",
              "cell": "Open until 11:00 PM",
              "fact": "McDonald’s buys 54 million pounds of fresh apples a year",
              "food:":"http://mcdonalds-prod-sites-us.adobecqms.net/content/dam/McDonalds/item/t-mcdonalds-McDouble.png"

            },


            {
              "location":{
                "street": "36 W Randolph St",
                "city": "chicago",

                "state": "illinois",
                "postcode": 60615

              },
              "image":'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXGkD88Y-gXezvPnzI4FyA9czy1g_f3yRGnTrfS8gOMOLHrbyq',
              "phone": "(312) 944-5665",
              "cell": "Open until 11:00 PM",
              "fact": "Each year, McDonald’s buys 3.4 billion pounds of potatoes",
              "food": "http://mcdonalds-prod-sites-us.adobecqms.net/content/dam/McDonalds/item/t-mcdonalds-McDouble.png"
            },

            {
              "location": {
                "street": "36 W Randolph St",
                "city": "chicago",


                "state": "illinois",
                "postcode": 60615

              },
              "image":'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2-wg3tSmUEPsJJOp-4IaQ1p69cGN2L8rYGwlwDraCfAfohPI',
              "phone": "(312) 944-5665",
              "fact": "The most southerly McDonald’s franchise is in Invercargill, New Zealand",
              "cell": "Open until 11:00 PM",
              "food": "http://mcdonalds-prod-sites-us.adobecqms.net/content/dam/McDonalds/item/t-mcdonalds-McDouble.png"

            },


            {
              "location": {
                "street": "36 W Randolph St",
                "city": "chicago",

                "state": "illinois",
                "postcode": 60615

              },
              "image":'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToE-xk_8h6BXR1MAhsBo-NoRxt2j9spz0ClWhlLZBiOqDiRrO8L0Pjdw',
              "phone": "(312) 944-5665",
              "cell": "Open until 11:00 PM",
              "fact": "McDonald’s Caesar salad is more fattening than its hamburger",
              "food": "http://mcdonalds-prod-sites-us.adobecqms.net/content/dam/McDonalds/item/t-mcdonalds-McDouble.png"

            },


            {
              "location": {
                "street": "36 W Randolph St",
                "city": "chicago",

                "state": "illinois",
                "postcode": 60615

              },
              "image":'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKEckAbv7X0sonN80TTDV2H0vOzmHpinMHuc54pKFOcWpaucKQUE8V7Q',
              "phone": "(312) 944-5665",
              "cell": "Open until 11:00 PM",
              "fact": "Approximately 9 out of 10 American children eat at a McDonald’s restaurant every month",
              "food": "http://mcdonalds-prod-sites-us.adobecqms.net/content/dam/McDonalds/item/t-mcdonalds-McDouble.png"

                  }
];







class App extends React.Component {

      renderScene(route, navigator) {
      		return <route.component navigator={navigator} {...route.passProps} />
        }

        render() {
          return (
            <Navigator
        		style={ styles.container }
        		renderScene={ this.renderScene }
        		initialRoute={{ component: SearchPage }}
        		/>
          );
        }
      }
      function urlForQueryAndPage(key, value, pageNumber) {
        var data = {
            country: 'uk',
            pretty: '1',
            encoding: 'json',
            listing_type: 'buy',
            action: 'search_listings',
            page: pageNumber
        };
        data[key] = value;

        var querystring = Object.keys(data)
          .map(key => key + '=' + encodeURIComponent(data[key]))
          .join('&');

        return 'http://api.nestoria.co.uk/api?' + querystring;
      };

      class  SearchPage extends React.Component{
        constructor(props) {
          super(props);
          this.state = {
            searchString: 'london',
            isLoading: false,
            message: ''
          };
        }

        onSearchTextChanged(event) {
          console.log('onSearchTextChanged');
          this.setState({ searchString: event.nativeEvent.text });
          console.log(this.state.searchString);
        }

        _executeQuery(query) {
          console.log(query);
          this.setState({ isLoading: true });
       this._handleResponse(query)

        }

        _handleResponse(response) {
          this.setState({ isLoading: false , message: '' });

          this.props.navigator.push({
            component:SearchResults,
            passProps: {locations: response}
          });



        }

        onSearchPressed() {
          var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
          this._executeQuery(query);
        }

        onLocationPressed() {

              var search = '41.8781' + ',' + '87.6298';
              this.setState({ searchString: search });
              var query = urlForQueryAndPage('centre_point', search, 1);
              this._executeQuery(add_data);
        }

        render() {


          var spinner = this.state.isLoading ?
          ( <ActivityIndicator
              size='large'/> ) :
          ( <View/>);

          return (
            <View style={styles.containert}>


              <TouchableHighlight
                style={styles.button}
                onPress={this.onLocationPressed.bind(this)}
                underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>McDonalds Locations</Text>
              </TouchableHighlight>
              <Image  source={{uri:'http://cdn.secretmenus.com/wp-content/uploads/2014/05/logo-mcdonalds.png'}} style={styles.image}/>
              {spinner}
              <Text style={styles.description}>{this.state.message}</Text>
            </View>
          );
              }
}
class SearchResults extends React.Component {

      constructor(props) {
        super(props);
        var dataSource = new ListView.DataSource(
          {rowHasChanged: (r1, r2) => r1.phone !== r2.phone});
        this.state = {
          dataSource: dataSource.cloneWithRows(this.props.locations)
        };
      }

      renderRow(rowData, sectionID, rowID) {

        return (


          <TouchableHighlight onPress={() => this.rowPressed(rowID)}
              underlayColor='#dddddd'>
            <View>
              <View style={styles.rowContainer}>
                <Image style={styles.thumb} source={{ uri: rowData.image }} />
                <View  style={styles.textContainer}>

                  <Text style={styles.title}>{rowData.location.street}</Text>
                  <Text style={styles.title}
                        numberOfLines={1}>{rowData.cell}</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </View>
          </TouchableHighlight>
        );
      }

      rowPressed(listedURL) {



        this.props.navigator.push({
          component:PropertyView,

          passProps: {property: parseInt(listedURL)}
        });
      }

      render() {
        return (

          <ListView
            dataSource={this.state.dataSource}
          	renderHeader = {this.renderHeader.bind(this)}
            renderRow={this.renderRow.bind(this)}/>
        );
      }

      renderHeader() {
        return <View style={{backgroundColor:'red', height:60}}><Text style={{color: 'white', fontSize:20, marginTop:30, textAlign:'center'}}>Chicago McDonalds</Text></View>
      }



}

class PropertyView extends Component {


  render() {
    var property = add_data[this.props.property]



    return (
      <View style={styles.container}>
        <Image style={styles.image1}
            source={{uri: property.food}} />
        <View style={styles.heading}>

          <Text style={styles.price1}>{property.phone}</Text>
           <Text style={styles.title1}>{property.cell}</Text>
          <View style={styles.separator}/>
        </View>

        <Text style={styles.description}>{property.fact}</Text>
      </View>

  );
	  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  containert: {
    padding: 30,
    marginTop: 65,

    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
        width: 350,
    height: 300,
    justifyContent: 'center',
marginLeft: 15,
    marginTop: 30
  },

    thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },

    container1: {
    marginTop: 65
  },
  heading1: {
    backgroundColor: '#F8F8F8',
  },
  separator1: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image1: {
    width: 400,
    height: 300
  },
  price1: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title1: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }

});
AppRegistry.registerComponent('ListviewDemo', () => App);
