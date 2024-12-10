import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Input from './components/Input';  // Yeni Input komponentini import edin

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        if (username === 'admin' && password === 'admin') {
            navigation.navigate('HomeScreen');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title="Login"
                onPress={handleLogin}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoginScreen;
