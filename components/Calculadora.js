import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import Result from './Result';

const Calculadora = () => {

    const [fieldA, setFieldA] = useState('');
    const [fieldB, setFieldB] = useState('');
    const [fieldC, setFieldC] = useState('');
    const [result, setResult] = useState('X = ?');

    const fieldHandler = (value, field) => {
        switch(field){
            case 'a':
                setFieldA(value);
                break;
            case 'b':
                setFieldB(value);
                break;
            case 'c':
                setFieldC(value);
                break;
            default:
                console.log('ID não identificado');
        }
    }

    useEffect(() =>{
        if( fieldA && fieldB && fieldC ){
            let a = parseFloat(fieldA.replace(",", "."));
            let b = parseFloat(fieldB.replace(",", "."));
            let c = parseFloat(fieldC.replace(",", "."));
            let resultado = (( b * c ) / a );
            console.log(resultado);
            if(resultado % 1){
                setResult('X = '+resultado.toFixed(3));
            } else {
                setResult('X = '+resultado); 
            }
        } else {
            setResult('X = ?');
        }
    }, [fieldA, fieldB, fieldC]);

   

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Input fieldHandler={fieldHandler} id='a' placeholder="A" />
                <View style={styles.textoEstaContainer}>
                    <Text style={styles.textoEsta}>está para</Text>
                </View>
                <Input fieldHandler={fieldHandler} id='b' placeholder="B" />
            </View>
            <Text style={styles.textoAssim}>ASSIM COMO</Text>
            <View style={styles.row}>
                <Input fieldHandler={fieldHandler} id='c' placeholder="C" />
                <View style={styles.textoEstaContainer}>
                    <Text style={styles.textoEsta}>está para</Text>
                </View>
                <Result style={{flex: 1}} text="X" />
            </View>
            <View>
                <Text style={styles.textoResultado}>Resultado</Text>
                <Result text={result} />
            </View>
        </View>
    );
};

export default Calculadora;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eee',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 25,
    },
    row:{
        flexDirection: 'row',
    },
    textoAssim:{
        color: '#333',
        fontSize: 20,
        paddingVertical: 15,
        textAlign: 'center',
    },
    textoEstaContainer:{
        color: 'white',
        fontSize: 20,
        paddingVertical: 5,
    },
    textoEsta:{
        backgroundColor: '#555',
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textoResultado:{
        color: '#333',
        fontSize: 20,
        paddingBottom: 5,
        paddingTop: 20,
        textAlign: 'center',
    },
    resultado:{
        backgroundColor: '#1b95e0',
        borderColor: '#1b95e0',
        borderRadius: 5,
        borderWidth: 1,
        color: 'white',
        fontSize: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
    }
});
