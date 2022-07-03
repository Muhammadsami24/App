import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <ScrollView>
      <Image
        source={require("../../assets/Images/Image2.jpg")}
        style={styles.image}
        resizeMode="cover"
      >

      </Image>
      <View>
        <TextInput
          style={styles.input}
        >

        </TextInput>

          <Image
          source={require("../../assets/Images/Image3")}
          >

          </Image>
     
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  input: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginLeft: 20,
    marginRight: 80,
    borderRadius: 40,
    backgroundColor: "#23D5C6",
  }

})

export default Home
