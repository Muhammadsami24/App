import { ScrollView, StyleSheet, Text, View, Image, TextInput, Searchbar, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Home = () => {

  const data =
    [
      {
        id: 1,
        name: "Muhammad",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {

        id: 2,
        name: "Ibrar",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 3,
        name: "Sheroz",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 4,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 5,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 6,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 7,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 8,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 9,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 10,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 11,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },
      {
        id: 12,
        name: "Arsalan",
        email: "Muhammad024@gmail.com",
        Website: "https://unsplash.com/",
        mobile: "12345678918",
        image: "https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
      },

    ]

  return (
    <View style={styles.container}>
     <Text style={{fontFamily:"Nunito-Bold", fontSize:20 ,alignSelf:"center",marginBottom:10,color:"black"}}>Home</Text>
    <Text style={{fontFamily:"Nunito-Bold", fontSize:20}}>Muhammad Samiullah</Text>
      <View style={styles.search}>
        <AntDesign name='search1' size={20} />
        <TextInput
          placeholder='Search'
          style={{ paddingHorizontal:20, flexDirection: "row", justifyContent: "space-between" }}
        />
      </View>
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (

            <View style={styles.flatlist}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <Text style={styles.text}>{item.id}</Text>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.mobile}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    margin: 10,
    padding: 10,
    color:"white",

  },
  flatlist: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  text: {
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom:10,
    borderRadius:10,
    
  },
  search: {
    fontSize:12,
    height: 50,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 8,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 40,
    paddingLeft: 10,
    marginBottom:10,
  }
})

export default Home
