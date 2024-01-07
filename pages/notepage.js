// NotePage.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NotePage = ({ onSave }) => {
  const [noteText, setNoteText] = useState('');

  const handleSave = () => {
    onSave(noteText); // Pass the noteText to the parent component
    setNoteText(''); // Clear the text input after saving
  };

  return (
    <View style={styles.container}>
        <Button title="Save" onPress={handleSave} />
      <TextInput
        style={styles.input}
        placeholder="Type your note..."
        onChangeText={(text) => setNoteText(text)}
        value={noteText}
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default NotePage;
