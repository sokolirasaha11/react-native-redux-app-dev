import React, { useState } from "react";
import { Input, NativeBaseProvider, Box, Button, TextArea, Text, HStack } from "native-base"
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from "../store/actions/noteActions";



export const CreateNote = ({ navigation }) => {

    const [valueHeader, setValueHeader] = React.useState("")
    const setHeader = text => setValueHeader(text)

    const [valueText, setValueText] = React.useState("")
    const setText = text => setValueText(text)

    const myState = useSelector(state => state.noteReduser)
    const dispatch = useDispatch()

    const addToNotekList = (book) => dispatch(addNote(book));


    return (
        <NativeBaseProvider>
            <Box flex={1} bg='cyan.800' alignItems='center'>
                <Text mt={10} ml={2} mr={2} fontSize='30' color='cyan.50'>CREATE NOTE</Text>
                <Input onChangeText={setHeader} fontSize={25} borderColor='cyan.800' color='cyan.50' mt={5} placeholder="HEADER NOTE" w="75%" maxWidth="300px">{valueHeader}</Input>
                <TextArea onChangeText={setText} borderColor='cyan.800' color='cyan.50' fontSize={20} mt={3} placeholder="TEXT NOTE" flex={1} maxHeight='450px' w="75%" maxWidth="300px">{valueText}</TextArea>
                <HStack mt={3} space={10}>
                    <Button onPress={() => navigation.navigate('Body')}>Cancel</Button>
                    <Button onPress={() => {dispatch(addNote({
                        id: new Date().toJSON(),
                        header: valueHeader,
                        text: valueText,
                        favorites: false,
                        date: new Date().toDateString(),
                    }))
                    navigation.navigate('Body')}}>Add note</Button>
                </HStack>
            </Box>
        </NativeBaseProvider>
    )
}