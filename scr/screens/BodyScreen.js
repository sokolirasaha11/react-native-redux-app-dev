// The page that contains all the user's notes.
// Страница которая содержит все заметки пользователя.

import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Box, CheckIcon, Icon, Text, VStack, IconButton, Button, Input, Select, Menu, Fab, FlatList, Modal, FormControl} from "native-base";
import { useDispatch, useSelector } from 'react-redux';
import { addNote, dellNote, addFavorites, dellFavorites } from "../store/actions/noteActions";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";



export const BodyScreen = ({ navigation }) => {

    const [showModal, setShowModal] = useState(false);
    const [showModal_2, setShowModal_2] = useState(false);
    const [valueKey, setValueKey] = useState()

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
                <TouchableOpacity onPress={() => navigation.navigate('Open', { item })} onLongPress={() => {
                    setShowModal(true)
                    setValueKey(item)
                }}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Open', { item })} onLongPress={() => {
                        setShowModal_2(true)
                        setValueKey(item)
                    }}>
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
                <Text color='cyan.50' ml={5} mt={0} fontSize='16'>{myState.count_note + " " + 'note'}</Text>
                <Input color='info.900' borderRadius="30" ml={2} mr={2} mt={5} bg='cyan.600' borderColor='cyan.600' placeholderTextColor='cyan.50' placeholder='Search notes' fontSize='15' />
                <FlatList data={myState.note}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}>
                </FlatList>
                <Fab onPress={() => navigation.navigate('Create')} renderInPortal={false} shadow={2} size="sm" icon={<Icon as={AntDesign} color="white" name="plus" size="sm" />} />
                
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Small menu</Modal.Header>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModal(false);
                                    dispatch(dellNote(valueKey.id))
                                }}>
                                    Delete
                                </Button>
                                <Button onPress={() => {
                                    setShowModal(false);
                                    dispatch(addFavorites(valueKey.id))
                                }}>
                                    Add to favourites
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
                <Modal isOpen={showModal_2} onClose={() => setShowModal_2(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Small menu</Modal.Header>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModal_2(false);
                                    dispatch(dellNote(valueKey.id))
                                }}>
                                    Delete
                                </Button>
                                <Button onPress={() => {
                                    setShowModal_2(false);
                                    dispatch(dellFavorites(valueKey.id))
                                }}>
                                    Delete to favourites
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
                
            </Box>
        </NativeBaseProvider>
    )
}