// The page that contains all the user's notes.
// Страница которая содержит все заметки пользователя.

import React from "react";
import { NativeBaseProvider, Text, VStack, IconButton, Input, Select, TextArea, AlertDialog, Menu, Fab, FlatList } from "native-base";

export const BodyScreen = () => {
    let [service, setService] = React.useState("");

    return (
        <NativeBaseProvider>
            <Select selectedValue={service} minWidth="200" accessibilityLabel="All notes" placeholder="All notes" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="AllNotes" value="allNotes" />
                <Select.Item label="Favorites" value="favorites" />
                <Select.Item label="Recently deleted" value="deleted" />
            </Select>
            <Text>kol-vo notes</Text>
            <Input mx="3" placeholder="Search notes" w="75%" maxWidth="300px" />
            <FlatList>None</FlatList>
            <Fab renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
        </NativeBaseProvider>
    )
}