import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text>LoginScreen</Text>
        </View>
    )
}

export { LoginScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})