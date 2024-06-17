import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScrollCards = () => {
  return (
    <View>
      <Text style = {styles.headingText}>Scroll Cards</Text>
      <ScrollView horizontal = {true} style = {styles.container}>
        <View style = {[styles.card, styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>and</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>scroll</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>to</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>find</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>out</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ScrollCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding : 8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width: 100,
        height: 100,
        borderRadius:4,
        margin: 8
    },
    elevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: 'red',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }

})