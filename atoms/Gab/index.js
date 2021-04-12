import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Gab = ({height}) => {
    return (
        <View style ={styles.gap(height)}/>
    )
}

export default Gab;

const styles = StyleSheet.create({
    gap: (height) => ({
        height : height,
    }),
})
