import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Button } from '@rneui/themed';
import { Avatar } from '@rneui/themed';

export default function About({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Congratulations, you earned a pencil icon!</Text>
            <Avatar
                size={32}
                rounded
                icon={{ name: "pencil", type: "font-awesome" }}
                containerStyle={{ backgroundColor: "#9700b9" }}
            />
            <StatusBar style="auto" />
            <Button title="Home" onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
