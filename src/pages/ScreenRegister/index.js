import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';

const ScreenRegister = () => {

    const [Registrasi,setRegistrasi]= useState ('Registrasi');
    const [userName,setUserName]= useState('');
    const [userNama,setNama]= useState('');
    const [userEmail,setEmail]= useState('');
    const [userAddress,setAddress]= useState('');
    const [userPhoneNumber,setPhoneNumber]= useState('');

const handleSubmit = () =>{
  setRegistrasi ('Registrasi');
    const data={
        userName: userName,
        userNama: userNama,
        userEmail : userEmail,
        userAddress: userAddress,
        userPhoneNumber: userPhoneNumber,
        
      };
console.log(data);
}

    return (
        <View >
            <Text style={styles.regis}>Registration</Text>
            <View >
            
            <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
            label ="Name" 
            placeholder="Masukan Nama anda"
            onChangeText={(e)=>setNama(e)}
            />

             <TextInput
            label ="Username" 
            placeholder="Masukan Username anda"
            onChangeText={(e)=>setUserName(e)}
            />
            
            <TextInput
            label ="Email" 
            placeholder="Masukan email anda"
            onChangeText={(e)=>setEmail(e)}
            />

             <TextInput
            label ="Address" 
            placeholder="Masukan Username anda"
            onChangeText={(e)=>setAddress(e)}
            />

             <TextInput
            label ="Phone Number" 
            placeholder="Masukan nomor telepon anda"
            keyboardType= 'numeric'
            onChangeText={(e)=>setPhoneNumber(e)}
            />

            <Button label="Register" onSubmit={handleSubmit} />

            
            
            </ScrollView>
        </View>

            
            
        </View>
    )
}

export default ScreenRegister;

const styles = StyleSheet.create({
    regis : {
        fontSize:36,
        marginHorizontal: 24,
        marginVertical: 24,
        fontWeight:'bold',

    },

})