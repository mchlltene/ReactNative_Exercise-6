import React, {useState, useEffect, useReducer} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import UserList from '../../molecules/UserList';
import Axios from 'Axios';

const ScreenUserList = () => {

    useEffect (()=>{
        const [users,setUsers]=useState([]);
        Axios.get('https://reqres.in/api/users').then(res =>
        setUsers(res.data),
        );
    },[]);

    return (
        <View>
          <Text style={styles.title}>Screen User UserList</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
               {users.map(item=>(
                   <UserList 
                   key={item.id}
                   fullName ={`${item.name}`}
                   userName={`${item.username}`}
                   userEmail={`${item.email}`}
                   userAddress={`${item.adress}`}
                   userPhoneNmber={`${item.userPhoneNmber}`}

                   />
               )
               )}
            </ScrollView>
        </View>
        
       
    )
}

export default ScreenUserList;

const styles = StyleSheet.create({
    container: {
        marginHorizontal:24,
        borderRadius :5,
    },
    title: {
        fontSize:36,
        fontWeight: 'bold',
        marginHorizontal:24,
        marginVertical:24
    },
})