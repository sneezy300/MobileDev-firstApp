import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'
import profile from './assets/profile.jpg'


function App() {
    return <View style={styles.container}>
        <Image source={profile} style={styles.image} />
        <View style={styles.detailsContainer}>
            <Text style={styles.label}>NAME</Text>
            <Text style={[styles.label, styles.info]}>Manuel Nana Sarfo Antwi</Text>
        </View>

        <View style={styles.detailsContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={[styles.label, styles.info]}>Sneezy300@gmail.com</Text>
        </View>

        <View style={styles.detailsContainer}>
            <Text style={styles.label}>GENDER</Text>
            <Text style={[styles.label, styles.info]}>Transgender</Text>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 30,
        alignSelf: "center",
        borderRadius: 75,
        marginTop: 100
    },
    detailsContainer: {
        flexDirection: "row",
        marginVertical: 5
    },
    label: {
        borderColor: "black",
        borderWidth: 1,
        fontSize: 20,
        flex: 2.5,
        paddingHorizontal: 5
    },
    info: {
        flex: 7.5
    }
});

export default App;