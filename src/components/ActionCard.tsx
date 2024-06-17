import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style={[styles.elevatedCard, styles.card]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headText}>
                What is new in JS 21?
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg'
        }} 
        style = {styles.cardImage}/>
        <View style = {styles.bodyContainer}>
            <Text numberOfLines={3} >
                When working with React.js, there are several file extensions like .js, .jsx, .ts, and .tsx. It can be overwhelming to look at them for the first time. Each file extension has its own strengths and weaknesses, and which one to use highly depends on your needs. In this article, we will cover the difference between these file extensions.
            </Text>
        </View>
        <View style = {styles.footerContainer}>
            <TouchableOpacity
            onPress = {() => openWebsite('https://medium.com/@akshatvirmani72/how-to-choose-between-js-tsx-and-jsx-in-react-js-f574579b5a60')}
            >
                <Text style = {styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress = {() => openWebsite('https://reactnative.dev/docs/touchableopacity')}
            >
                <Text style = {styles.socialLinks}>Go Deep</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 8,
        fontWeight: 'bold'
    },
    elevatedCard: {
        backgroundColor: "lightgrey",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: "#333",
        shadowOpacity: 0.4
    },
    card: {
        width: 350,
        height: 360,
        marginHorizontal: 16,
        marginVertical: 12,
        borderRadius: 6
    },

    headingContainer: {
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage:{
        height: 200
    },
    bodyContainer:{
        padding: 10
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks:{
        fontSize: 16,
        color: '#000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})