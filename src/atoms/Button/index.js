import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({label,onSubmit}) => {
    return (
        <TouchableOpacity onPress={onSubmit}style={styles.button}>
              <Text style={styles.labelButton}>{label}</Text>
            </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        marginTop:9,
        backgroundColor: '#C238CE',
        paddingVertical: 15,
        marginHorizontal:24,
        borderRadius: 10,
      },
    
      labelButton: {
        textAlign:'center',
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
      },
});

export default Button;
