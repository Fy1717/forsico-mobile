import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Header = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image source={require('../../assets/adaptive-icon.png')} style={styles.logo} />
                <TouchableOpacity style={styles.searchContainer}>
                    <Text style={styles.searchText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/adaptive-icon.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/adaptive-icon.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff', // Arka plan rengini belirtmek için kullanılır, isteğe bağlı
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    searchContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    searchText: {
        fontSize: 16
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
});

export default Header;
