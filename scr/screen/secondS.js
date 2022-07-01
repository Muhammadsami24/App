import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor={"black"}
      />
      {/* // First Text "Log In" */}
      <Text style={styles.text1}>Log In</Text>

      {/* First Text "Facebook and Twitter" */}
      <View style={styles.btncontainer1}>
        <TouchableOpacity style={styles.buton1}
        >
          <Image
            style={styles.Image1}
            source={require("../../assets/Images/Facebook.png")}
          >
          </Image>
          <Text style={styles.text2}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buton2}
        >
          <Image
            style={styles.Image2}
            source={require("../../assets/Images/Twitter.png")}
          >
          </Image>
          <Text style={styles.text2}>Twitter</Text>
        </TouchableOpacity>
      </View>

      {/* First Text "or login with email" */}
      <View style={styles.descrip1}>
        <Text style={styles.text3}>or login with email</Text>
      </View>

      {/* First Text "Your Email" */}
      <View style={styles.inputcon}>
        <TextInput
          style={styles.inputstyle}
          placeholder="Your Email"
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>

      {/*  First Text "Your Password" */}
      <View style={styles.inputcon}>
        <TextInput
          style={styles.inputstyle}
          placeholder="Your Password"
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      {/*  First Text "Forget Your Password" */}
      <View style={styles.descrip2}>
        <TouchableOpacity >
          <Text style={styles.text4}>Forget Your Password</Text>
        </TouchableOpacity>
      </View>

      {/* // First Text "Log in" */}
      <View style={styles.btncontainer2}>
        <TouchableOpacity style={styles.buton3}
          onPress={() => {
            navigation.navigate("Home")
          }}>
          <Text style={styles.text5}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* // First Text "Don't have an account?" */}
      <View style={styles.descrip3}>
        <Text style={styles.text6}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup")
          }}>
          <Text style={styles.text7}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  btncontainer1: {
    marginVertical: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginHorizontal: 18,

  },
  btncontainer2: {
    marginTop: 30,
  },
  descrip1: {
    marginVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  descrip2: {
    marginTop: 10,
    marginRight: 20,
    alignItems: "flex-end",
  },
  descrip3: {
    marginVertical: 200,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
  },
  inputstyle: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 4,
    fontSize: 14,
    fontFamily: "Nunito-ExtraBold",
  },
  inputcon: {
    marginVertical: 20,
    marginBottom: 3,
    marginHorizontal: 20,

  },
  Image1: {
    width: 24,
    height: 24,
  },
  Image2: {
    width: 24,
    height: 24,
  },
  text1: {
    marginTop: 70,
    marginVertical: 30,
    marginHorizontal: 20,
    fontFamily: "Nunito-ExtraBold",
    fontSize: 30,
    color: "grey",
  },
  text2: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
  },
  text3: {
    fontFamily: "Nunito-ExtraBold",
    color: "grey",
    fontSize: 16,
  },
  text4: {
    fontFamily: "Nunito-ExtraBold",
    color: "grey",
    fontSize: 12,
  },
  text5: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
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
  buton1: {
    padding: 10,
    width: "45%",
    backgroundColor: "#3b5998",
    borderRadius: 30,
    flexDirection: "row",
    elevation: 8,
  },
  buton2: {
    padding: 10,
    width: "45%",
    backgroundColor: "#1DA1F2",
    borderRadius: 30,
    flexDirection: "row",
    elevation: 8,
  },
  buton3: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#23D5C6",
    borderRadius: 30,
    elevation: 4,
  },
})

export default Login
