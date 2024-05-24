import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Ionicons name="home" size={24} color="black" />
        </View>
    );
}