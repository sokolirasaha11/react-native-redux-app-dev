import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BodyScreen } from '../screens/BodyScreen';
import { OpenNote } from '../screens/OpenNote';
import { CreateNote } from '../screens/CreateNote';

const Stack = createNativeStackNavigator();
export function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Body">
                <Stack.Screen name="Body" component={BodyScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Open" component={OpenNote} options={{ headerShown: false }} />
                <Stack.Screen name="Create" component={CreateNote} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}