import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

class CurrencyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            currencySelected: ''
        }
    }
    onChangeText = (value) => {
        this.setState({
            currencySelected: value
        })
    }
    onPress = () => {
        if (this.state.text !== '' && this.state.currencySelected !== '') {
            if (this.state.text >= 0) {
                this.props.navigation.navigate('ConvertedCurrency', { currency: this.state.currencySelected, valueNeed: this.state.text });
            }
            else {
                alert('Enter only positive numbers')
            }
        }
        else {
            alert('Enter the Inputs')
        }
    }
    static navigationOptions = {
        title: 'Currency Exchange',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerStyle: {
            backgroundColor: '#4f51ff',
        },
    };
    render() {
        let data = [{ value: 'BGN', }, { value: 'CAD', }, { value: 'BRL', }, { value: 'HUF', }, { value: 'DKK', }, { value: 'JPY', }, { value: 'ILS', }, { value: 'TRY', }, { value: 'RON', }, { value: 'GBN', }, { value: 'PHP', }, { value: 'HRK', }, { value: 'NOK', }, { value: 'ZAR', }, { value: 'MXM', }, { value: 'AUD', }, { value: 'USD', }, { value: 'KRW', }, { value: 'HKD', }, { value: 'EUR', }, { value: 'CZK', }, { value: 'THB', }, { value: 'MYR', }, { value: 'NZD', }, { value: 'PLN', }, { value: 'CHF', }, { value: 'SEK', }, { value: 'CNY', }, { value: 'SGD', }, { value: 'INR', }, { value: 'IDR', }, { value: 'RUB', }];
        return (
            <View style={styles.container}>
                <View style={{ width: 220, alignSelf: "center" }}>
                    <Dropdown
                        label='Currency'
                        data={data}
                        itemCount={6}
                        onChangeText={this.onChangeText}
                        dropdownPosition={-7}
                    />
                </View>
                <TextInput
                    style={styles.textBox}
                    placeholder='currency value here...'
                    onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                ><Text style={styles.fontStyle}>Convert</Text></TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // paddingHorizontal: 10,
        marginTop:5
    },
    textBox: {
        height: 40,
        width: 220,
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: '#4f51ff'
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#4f51ff',
        padding: 10,
        color: 'white',
        width: 180
    },
    fontStyle: {
        color: 'white'
    }
})


export default CurrencyHome;