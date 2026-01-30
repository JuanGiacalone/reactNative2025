import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native';


export default function FeedbackForm() {


    const [name, setName] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [feedback, setFeedback] = React.useState('');

    const handleSubmit = () => {
        console.log('Name:', name);
        console.log('Rating:', rating);
        console.log('Feedback:', feedback);
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView keyboardDismissMode='on-drag' automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.container}>
                    <Text style={styles.headingSection}>Feedback Form</Text>
                </View>

                <Text style={styles.infoSection}>Rate your visit</Text>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                    <Text>Name</Text>
                    <TextInput value={name} onChangeText={setName} placeholder="Enter your name" style={styles.input} />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                    <Text>Rate your visit</Text>
                    <TextInput value={rating} onChangeText={setRating} placeholder="Enter your rating" style={styles.input} keyboardType="numeric" />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                    <Text>Feedback</Text>
                    <TextInput
                        value={feedback}
                        onChangeText={setFeedback}
                        placeholder="Enter your feedback"
                        style={styles.input}
                        multiline={true}
                        clearButtonMode='while-editing'
                        maxLength={250} />
                </KeyboardAvoidingView>

                <Button title="Submit" onPress={handleSubmit} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
});     
