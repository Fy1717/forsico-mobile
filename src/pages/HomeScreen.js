import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            
            <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
            <Text style={styles.greetingText}>HELLO FORSICO</Text>
            
            <View style={styles.subContainer}>
                <Text style={styles.textStyle}>Furkan</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => alert('Button Clicked!')}>
                <Text style={styles.buttonText}>Click Me!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    greetingText: {
        fontSize: 18,
        color: '#555',
        marginBottom: 20,
    },
    subContainer: {
        backgroundColor: 'yellow',
        width: '80%',  // Increased width for better visibility
        height: 100,    // Fixed height for consistent design
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 20,
    },
    textStyle: {
        fontSize: 20,
        color: 'red',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});

export default HomeScreen;
