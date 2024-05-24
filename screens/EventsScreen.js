import { Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function EventsScreen({ navigation }) {


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Events go here!</Text>
            <Button onPress={() => { navigation.navigate("Event Details") }} title="See Details" />
        </View>
    );
}

function EventsSecondScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Events second screen!</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function EventsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Events' component={EventsScreen} />
            <Stack.Screen name="Event Details" component={EventsSecondScreen} />
        </Stack.Navigator>
    );
}