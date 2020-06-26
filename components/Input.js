import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {

    const [value, setValue] = useState('');

    const textHandler = (enteredValue) => {
        setValue(enteredValue);
        props.fieldHandler(enteredValue, props.id);
    }

    return (
        <TextInput 
            {...props}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={textHandler}
            value={value}
        />
    );
};

export default Input;

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'white',
        borderColor: '#444',
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center'

    }
});
