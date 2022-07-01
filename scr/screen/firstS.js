import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Start = ({ navigation }) => {
    return (
        <View>
            <StatusBar
                StatusBar translucent backgroundColor='transparent'
            />
            <ImageBackground
                source={require("../../assets/Images/Image1.jpg")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="stretch"
            >
                <View style={styles.button}>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('Login')}
                        style={styles.click}
                    >
                        <Text style={styles.text1}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>

    )
}
const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
       
    },
    click: {
        paddingHorizontal:60,
        paddingVertical: 12,
        backgroundColor: "#23D5C6",
        marginBottom: 50,
        borderRadius:40,
        elevation:8,
      
    },
    text1: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontFamily:"Nunito-ExtraBold",
        textTransform:"uppercase",
    }
})

export default Start
