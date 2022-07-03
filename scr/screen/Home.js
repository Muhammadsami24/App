import { ScrollView, StyleSheet, Text, View, Image, TextInput,Searchbar } from 'react-native'
import React from 'react'

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView>
      <Image
        source={require("../../assets/Images/Image2.jpg")}
        style={styles.image1}
        resizeMode="cover"
      >

      </Image>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  image1: {
    width: "100%",
    height: 300,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image2: {
    backgroundColor: "#23D5C6",
    marginTop: 10,
    marginRight: 20,
    marginLeft: 5,
    borderRadius: 40,
    paddingTop: 20,
    width: 24,
    height: 24,
    borderRadius: 20,
  },
 
  input: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 80,
    borderRadius: 40,
    backgroundColor: "#23D5C6",
  }

})

export default Home
