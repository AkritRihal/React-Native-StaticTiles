import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollCards from './components/ScrollCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>App</Text> */}
        <FlatCards/>
        <ScrollCards/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App