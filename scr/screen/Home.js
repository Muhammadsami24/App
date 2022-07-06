import { ScrollView, StyleSheet, Text, View, Image, TextInput, Searchbar } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={{backgroundColor:"white",height:"100%",width:"100%"}}>
      <View
        style={{
          elevation: 5,
          backgroundColor: "white",
          marginTop: 50,
          paddingVertical: 5,
          paddingLeft: 15,
          borderRadius: 30,
          marginHorizontal: 20,
          alignItems: "center",
          flexDirection: "row",

        }}>
        <FontAwesome name="search" size={20} color="grey" />
        <TextInput
          placeholder='Search'
          style={{ fontSize: 18, marginLeft: 10, }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

})

export default Home
