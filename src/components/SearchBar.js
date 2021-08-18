import React from 'react';
import { View, Text, StyleSheet, TextInput  } from 'react-native';
import { Feather } from "@expo/vector-icons"

const SearchBar = () => {
    return <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name="search"/>
    <TextInput style={styles.inputStyle} placeholder="Search"/> 
</View>
};

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal:15,
    },
    backgroundStyle: {
        marginTop:15,
        flexDirection: "row",
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    }
});
export default SearchBar;