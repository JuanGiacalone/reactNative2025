import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, View, Alert } from 'react-native';
import React from 'react';

const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');

export default function LoginScreen() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                <Text style={styles.regularText}>Login to continue </Text>

                <View>
                    <Text>Username</Text>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter your username"
                        onFocus={() => Alert.alert('Username focused')}
                        onBlur={() => Alert.alert('Username blurred')}
                        blurOnSubmit={true}
                        style={styles.input} />
                </View>

                <View>
                    <Text>Password</Text>
                    <TextInput
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        style={styles.input} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#F4CE14',
    },
});

