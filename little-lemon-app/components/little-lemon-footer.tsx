import { View, Text } from 'react-native';
import { ThemedText } from './themed-text';

export default function LittleLemonFooter() {
    return (
        <View style={{
            backgroundColor: '#F4CE14',
            marginBottom: 0,
        }}>
            <ThemedText
                style={{
                    padding: 20,
                    fontSize: 20,
                    color: 'black',
                    textAlign: 'center',
                }}>
                All rights reserved © Little Lemon.
            </ThemedText>
        </View>
    );
}
