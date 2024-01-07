import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Button } from 'react-native';
import Welcome from '../components/welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotePage from './notepage';
import {useState} from 'react';

const Home = ({navigation}) => {
  const [showNotePage, setShowNotePage] = useState(false);
  const [notes, setNotes] = useState([]);

  const saveNote = async (noteText) => {
    try {
      const newNote = { id: Date.now().toString(), text: noteText };

      // Save the note to AsyncStorage
      await AsyncStorage.setItem('notes', JSON.stringify([...notes, newNote]));

      // Update the notes state
      setNotes([...notes, newNote]);

      // Hide the NotePage
      setShowNotePage(false);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const showNotePageHandler = () => {
    setShowNotePage(true);
  };
  
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Welcome/>
        <TouchableOpacity onPress={showNotePageHandler}>
            <Text>Make Note...</Text>
        </TouchableOpacity>
        {showNotePage && <NotePage onSave={saveNote} />}

        <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('NoteDetails', { noteId: item.id })}>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    );
  }

export default Home;