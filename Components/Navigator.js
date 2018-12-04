import React from "react";
import {Text} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CurrencyHome from './CurrencyHome';
import ConvertedCurrency from './ConvertedCurrency';

const Navigation=createStackNavigator(
    {
        CurrencyHome:{screen: CurrencyHome},
        ConvertedCurrency:{screen: ConvertedCurrency,
            }
    },
    {
        initialRouteName: "CurrencyHome"
    }
)


export default createAppContainer(Navigation);
