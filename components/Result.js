import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Input = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.text} >{props.text}</Text>
        </View>
        
    );
};

export default Input;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1b95e0',
        borderColor: '#1b95e0',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    text:{
        borderColor: '#1b95e0',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    }
});
