import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Button } from 'react-native';

class ConvertedCurrency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: {},
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Ex-Price '+navigation.getParam('currency')+' for '+navigation.getParam('valueNeed'),
          headerStyle: {
            backgroundColor: '#4f51ff',
          },
          headerTitleStyle: {
            fontColor:'white'
          },
        };
      };
    componentWillMount() {
        let value = this.props.navigation.getParam('currency')
        let url = 'https://api.exchangeratesapi.io/latest?base=';
        let fetchUrl = url + value;
        return fetch(fetchUrl)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.rates,
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        dataKeys = Object.keys(this.state.dataSource);
        let valueNeed = this.props.navigation.getParam('valueNeed');
        if (this.state.isLoading) {
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <ScrollView >{dataKeys.map((data, index) => (
                    <View horizontal={true} key={index}>
                        <ScrollView style={styles.textContainer}>
                            <Text style={styles.font}>{data} : {this.state.dataSource[dataKeys[index]] * valueNeed}</Text>
                            <Text style={styles.actualData}>Actual Rate : {this.state.dataSource[dataKeys[index]]}</Text>
                        </ScrollView>
                        <View style={styles.borderLine} />
                    </View>
                ))}</ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    borderLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    font: {
        paddingLeft: 10,
        padding: 10,
        color: '#4f51ff',
        textAlign: 'left'
    },
    actualData: {
        padding: 10,
        overflow: 'scroll',
    }
})

export default ConvertedCurrency;