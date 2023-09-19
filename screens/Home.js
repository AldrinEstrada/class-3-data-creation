import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Button } from '@rneui/themed';

export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Welcome to this exercise!</Text>
            <StatusBar style="auto" />
            <Button title="Learn More!" onPress={() => navigation.push('About')}/>
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
