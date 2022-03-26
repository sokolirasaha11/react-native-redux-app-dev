// The page that contains the user's favorite notes.
// Страница которая содержит избранные заметки пользователя.
import React, { useState } from "react"
import { Input, NativeBaseProvider, Box, Button, TextArea, Text, HStack } from "native-base"
import { useDispatch, useSelector } from 'react-redux';
import { editNote } from "../store/actions/noteActions";
import { TouchableOpacity } from "react-native";



export const OpenNote = ({ route, navigation }) => {

    const item = route.params
    console.log(item)


    const [valueHeader, setValueHeader] = React.useState(item.item.header)
    const setHeader = text => setValueHeader(text)

    const [valueText, setValueText] = React.useState(item.item.text)
    const setText = text => setValueText(text)

    const myState = useSelector(state => state.noteReduser)
    const dispatch = useDispatch()

    const addToNotekList = (book) => dispatch(addNote(book));


    return (
        <NativeBaseProvider>
            <Box flex={1} bg='cyan.800' alignItems='center'>
                <Input borderColor='cyan.800' onChangeText={setHeader} mt={7} placeholder="HEADER NOTE" w="75%" maxWidth="300px"
                fontSize={30} color='cyan.50'
                >{valueHeader}</Input>
                <TextArea onChangeText={setText} color='cyan.50' borderColor='cyan.800' fontSize={20} mt={3} placeholder="TEXT NOTE" flex={1} maxHeight='450px' w="75%" maxWidth="300px">{valueText}</TextArea>
                <HStack mt={3} space={10}>
                    <Button onPress={() => navigation.navigate('Body')}>Cancel</Button>
                    <Button onPress={() => {
                        dispatch(editNote({
                            id: item.item.id,
                            header: valueHeader,
                            text: valueText,
                            favorites: item.item.favorites,
                            date: item.item.date,
                        }))
                        navigation.navigate('Body')
                    }}>Save</Button>
                </HStack>
            </Box>
        </NativeBaseProvider>
    )
}