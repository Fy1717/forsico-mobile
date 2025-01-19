import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import InputCustom from '../components/InputCustom.js';  // Yeni Input komponentini import edin
//import Authentication from '../api/AuthApi/authentication.js';
import { MasterPage } from '../pages/MasterPage.js';  // Updated import path

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const authentication = new Authentication();

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);

        /*
        const response = authentication.login(username, password);

        console.log("response :", response);

        if (response.success) {
            console.log("Success")
        } else {
            console.log("FAILED")
        }*/
        
        if (username === 'admin' && password === 'admin') {
            navigation.navigate('MasterPage');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <View style={styles.container}>
            <InputCustom
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <InputCustom
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
