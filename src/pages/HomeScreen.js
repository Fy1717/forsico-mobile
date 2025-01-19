import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios'; // Make sure axios is installed and imported

const HomeScreen = () => {
    const [inputText, setInputText] = useState('');
    const [results, setResults] = useState([]);

    const handleAPIRequest = () => {
        let data = JSON.stringify({
            "user_content": inputText,
            "lang": "English",
            "is_for_subtask": false,
            "task_id": "2.1",
            "subtask_assignee": "Development Team"
        });

        let config = {
            method: 'post',
            url: 'https://api.yourdomain.com/process_text',
            headers: { 
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
        .then((response) => {
            setResults(response.data.result); // Assuming response.data.result is the array to be displayed
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your text"
                value={inputText}
                onChangeText={setInputText}
            />
            <Button
                title="Submit"
                onPress={handleAPIRequest}
            />
            <FlatList
                data={results}
                keyExtractor={(item) => item.id ? item.id.toString() : 'unknown'}
                renderItem={({ item }) => {
                    // Ensure all properties are present and fallback to default values if not
                    const { id = 'N/A', title = 'No Title', description = 'No Description', assignee = 'Unassigned' } = item;
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text>{description}</Text>
                            <Text>{assignee}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default HomeScreen;
