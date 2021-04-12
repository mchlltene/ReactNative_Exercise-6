import React from 'react';
import { StyleSheet, Text, View, TextInput as Input } from 'react-native';

const TextInput = ({label,placeholder, ...rest}) /*(props)*/=> {
    return (
        <View>
            <Text style={styles.labelInput}>{label}</Text>
            <Input style={styles.input} placeholder={placeholder}
            {...rest}
            /> 
        </View>
    )
}
// const Title = ({judul}) => {
//     return (
//         <Text>{judul}</Text>
//     )
// }
export default TextInput;

const styles = StyleSheet.create({
    labelInput: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal:24,
      },
    
      input : {
        borderWidth:1,
        borderColor:'grey',
        borderRadius: 10,  //lekukan border
        paddingLeft: 10,
        paddingTop:11,
        paddingBottom:10, 
        marginHorizontal:24 ,
        marginBottom:30,  
      },
});
