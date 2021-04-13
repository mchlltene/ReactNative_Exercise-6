import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const UserList = ({fullName, userEmail,userName,userAddress,userPhoneNmber}) => {
    return (
        <View>
        <Text >{fullName}</Text>
        <Text >{userName}</Text>
       <Text>{userEmail}</Text>
       <Text>{userEmail}</Text>
       <Text>{userAddress}</Text>
       <Text>{userPhoneNumber}</Text>
    </View>
    )
}

export default UserList;

const styles = StyleSheet.create({

})
