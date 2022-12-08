import {NavigationContainer, StackActions} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect} from 'react';
import {Text, View} from 'react-native';
import Profiles from './Profiles';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileDetails from './ProfileDetails';
import {DataContext, useContext} from '../providers/store/dataContext';

import {getNewUserData} from '../providers/service';

function Main() {
  const Stack = createStackNavigator();
  const userData = useContext(DataContext);

  setInterval(() => {
    getNewUserData().then((res) => {
      // console.log(res.results[0]);
      console.log((Math.floor(Math.random() * 10) + 1) * 1000);

      if (res) {
        userData.push(res.results[0]);
      }
    });
  }, (Math.floor(Math.random() * 10) + 1) * 1000);

  return (
    <DataContext.Provider value={userData}>
      <NavigationContainer>
        <View className="w-full h-full">
          <Stack.Navigator>
            <Stack.Screen
              name="Profiles"
              component={Profiles}
              options={{title: 'MY PROFILE', headerShown: false}}
            />
            <Stack.Screen
              name="ProfileDetails"
              component={ProfileDetails}
              options={{title: 'PROFILE DETAILS', headerShown: false}}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </DataContext.Provider>
  );
}

export default Main;
