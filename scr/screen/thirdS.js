import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* First line Sign Up */}
      <View style={styles.head}>
        <Text style={styles.Text1}>Sign Up</Text>
      </View>

      {/* Second line description */}
      <View style={styles.descrip}>
        <Text style={styles.Text2}>Creat your account and enjoy the amazing deals 😘</Text>
      </View>

      {/* First Input field */}
      <View style={styles.con}>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder="First Name"
        />
      </View>

        {/* Second Input field */}
      <View style={styles.con}>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder="Last Name"
        />
      </View>

        {/* Third Input field */}
      <View style={styles.con}>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder="Enter Your Email"
        />
      </View>

        {/* Forth Input field */}
      <View style={styles.con}>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder="Enter Your Password"
          secureTextEntry={true}
        />
      </View>

      {/* Button */}
      <View style={styles.button}>
      <TouchableOpacity
        
        onPress={() => {
          navigation.navigate("Home")
        }}
      >
        <Text style={styles.Text4}>Sign up</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.descrip3}>
        <Text style={styles.text6}>Already have account?</Text>
        <TouchableOpacity
        style={styles.descrip3}
          onPress={() => {
            navigation.navigate("Login")
          }}>
          <Text style={styles.text7}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
  },
  con: {
    marginVertical: 10,
    marginBottom: 10,
  },
  head: {
    marginHorizontal: 20,
    marginVertical: 20,
    marginBottom: 5,
    marginTop:60,
  },
  descrip: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  descrip3: {
    marginVertical: 60,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    marginVertical: 20,
    backgroundColor: "#23D5C6",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation:6,
  },
  Text1: {
    fontFamily: "Nunito-Bold",
    fontSize: 35,
    color: "grey",
  },
  Text2: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
    color: "grey",
    lineHeight: 30,
  },
  Text3: {
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    marginHorizontal: 30,
    color: "black",

  },
  Text4: {
    fontFamily: "Nunito-Bold",
    fontSize: 20,
    marginHorizontal: 30,
    color: "black",
    textAlign: "center",
    color: "white"
  },
  text6: {
    fontFamily: "Nunito-ExtraBold",
    color: "grey",
    fontSize: 14,
  },
  text7: {
    fontFamily: "Nunito-ExtraBold",
    color: "#23D5C6",
    fontSize: 14,
  },
  input: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "white",
    elevation:4,
    fontFamily:"Nunito-Bold",
    fontSize:14,
  }

})


export default Signup