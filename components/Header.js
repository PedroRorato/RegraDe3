import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{props.title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    title: {
        color: '#1b95e0',
        fontSize: 30,
        textAlign: 'center',
    }
});
