// The page that contains all the user's notes.
// Страница которая содержит все заметки пользователя.

import React from "react";
import { NativeBaseProvider, Text, VStack, IconButton, Input, Select, TextArea, AlertDialog, Menu, Fab, FlatList } from "native-base";

export const BodyScreen = ({navigation}) => {
    let [service, setService] = React.useState("");

    return (
        <NativeBaseProvider>
            <Text>Hello World Man!</Text>
        </NativeBaseProvider>
    )
}