// The page that contains all the user's notes.
// Страница которая содержит все заметки пользователя.

import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Box, CheckIcon, Icon, Text, VStack, IconButton, Button, Input, Select, Menu, Fab, FlatList } from "native-base";
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from "../store/actions/noteActions";
import { TouchableOpacity } from "react-native";


export const BodyScreen = ({ navigation }) => {

    const myState = useSelector(state => state.noteReduser)
    const dispatch = useDispatch()

    const addToNotekList = book => dispatch(addNote(book));

    const handleAddNotemark = book => {
        addToNotekList(book);
    };

    const [service, setService] = React.useState("notes")

    console.log(myState.note)

    const renderItem = ({ item }) => {
        if (service === 'notes') {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Open', { item })}>
                    <Box p={1} borderRadius="10" mr={5} ml={5} mt={4} bg='cyan.200'>
                        <Text color="cyan.900" fontSize='20'>{item.header}</Text>
                        <Text color="cyan.900">{item.date}</Text>
                    </Box>
                </TouchableOpacity>
            )
        }
        else {
            if (item.favorites === true)
                return (
                    <TouchableOpacity /*НАСТРОИТЬ КНОПКУ ОТКРЫТИЯВКЛАДКИ*/>
                    <Box p={1} borderRadius="10" mr={5} ml={5} mt={4} bg='cyan.200'>
                        <Text color="cyan.900" fontSize='20'>{item.header}</Text>
                        <Text color="cyan.900">{item.date}</Text>
                    </Box>
                </TouchableOpacity>
                )
        }
    }

    return (
        <NativeBaseProvider>
            <Box bg='cyan.800' flex={1}>
                <Select borderColor='cyan.800' mt={7} ml={2} mr={2} fontSize='25' color='cyan.50' selectedValue={service} accessibilityLabel="My notes" placeholder="My notes" _selectedItem={{
                    bg: "#d4d0d6",
                    endIcon: <CheckIcon size="5" />
                }} onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="My notes" value="notes" />
                    <Select.Item label="Featured notes" value="featured" />
                </Select>
                <Text color='cyan.50' ml={5} mt={0} fontSize='16'>{myState.count_note + " " + service}</Text>
                <Input color='info.900' borderRadius="30" ml={2} mr={2} mt={5} bg='cyan.600' borderColor='cyan.600' placeholderTextColor='cyan.50' placeholder='Search notes' fontSize='15' />
                <FlatList data={myState.note}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}>
                </FlatList>
                <Fab onPress={() => navigation.navigate('Create')} renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" name="plus" size="sm" />} />
            </Box>
        </NativeBaseProvider>
    )
}