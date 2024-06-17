import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  
    const contacts = [
        {
            uid: 1,
            name: 'John Doe',
            status: 'teacher',
            imageUrl: 'https://2017.lutheranworld.org/sites/default/files/styles/large_updates_image/public/updates/1B_humans_not_for_sale.jpg?itok=IkUtnG_I' 
        },
        {
            uid: 2,
            name: 'Jane Doe',
            status: 'student',
            imageUrl: 'https://st2.depositphotos.com/1087752/5350/i/450/depositphotos_53502331-August-2014---Africa--Tanzania---Moments-of-everyday-life-in-the-Village-of-Pomerini--affected-by-AIDS.-Between-a-past-of-misery-and-poverty-and-a-future-of-hope-contained-in-childrens-eyes.jpg'
        },
        {
            uid: 3,
            name: 'Johny Doe',
            status: 'examiner',
            imageUrl: 'https://images.unsplash.com/photo-1520451644838-906a72aa7c86?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFuJTIwYmVpbmd8ZW58MHx8MHx8fDA%3D'
        },
        {
            uid: 4,
            name: 'Anne Doe',
            status: 'bitch',
            imageUrl: 'https://i.pinimg.com/236x/3f/13/04/3f13043cb3a95ae146f115ff18aad19d.jpg'
        }
    ];
  
    return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView
      style = {styles.container}
      scrollEnabled = {true}>
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style = {styles.userImage}
                />
                <View>
                    <Text style = {styles.userName} >{name}</Text>
                    <Text style = {styles.userStatus} >{status}</Text>
                </View>
                
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 8,
        fontWeight: 'bold'
    },
    container:{
        paddingHorizontal: 16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        color: '#8d3daf',
        padding: 4,
        borderRadius: 14
    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userStatus: {
        fontSize: 16,
        fontWeight: '400',
        // color: '#000'
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    }
})