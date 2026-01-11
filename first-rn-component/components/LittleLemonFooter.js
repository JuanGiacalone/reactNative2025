import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 20,
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved © Little Lemon.
      </Text>
    </View>
  );
}
