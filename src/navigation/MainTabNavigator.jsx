import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//screens
import {HomeScreen} from "../screens/HomeScreen";
import {ColumScreen} from "../screens/ColumScreen";
// import {Diagnosis} from "../screens/Diagnosis";

const Tab = createBottomTabNavigator();

export function MainTabNavigator(){
    return (
     <Tab.Navigator>
         <Tab.Screen name= "Home" component = { HomeScreen } />
         <Tab.screen name= "Colum" component = { ColumScreen } />
         {/* <Tab.screen name= "Diagnosis" component = { Diagnosis }/> */}
     </Tab.Navigator>
    );
}

