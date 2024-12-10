// Profile.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Profile = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.welcomeText}>Welcome to the Profile Page!</Text>
            <Text style={styles.greetingText}>Hello, here's your profile details.</Text>
            <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
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
    }
});

export default Profile;
