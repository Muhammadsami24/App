import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <ScrollView>
    <Image
        source={require("../../assets/Images/Image2.jpg")}
        style={{ width: "100%", height: 400,}}
        resizeMode="cover">
          
      </Image>
    
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:50,
    paddingVertical:60,
    margintop:100,
    backgroundColor:"black",
  }
})

export default Home
