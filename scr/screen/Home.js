import { ScrollView, StyleSheet, Text, View, Image, TextInput, Searchbar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Api from './Api';

const Home = () => {

  const [myUserData,setmyUserData]=useState();
  const [isLoad,setIsLoad]=useState();
  
const getUserData=async()=>{
  try{
    const response=await fetch(Api);
    const myData= await response.json();
    setmyUserData(myData);
    console.log(myData);
    setIsLoad(false);
  }catch(error){
    console.log(error);
  }
};

  useEffect(()=>{
    getUserData();
  },[]);

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
      <FlatList
        data={myUserData}
        renderItem={({item})=>{
          return(
          <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.mobile}</Text>
          </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({

})

export default Home
