import React, { useEffect } from 'react'
import { Vibration, View, StyleSheet } from 'react-native'
import RNFlagCreatorModule, { CountryFlag } from 'react-native-flag-creator'

const App = () => {
  useEffect(() => {
    console.log(RNFlagCreatorModule)
  })

  return (
    <View style={styles.container}>
      <CountryFlag countryCode='ma' style={styles.countryFlag} />
    </View>
  )
}
const styles = StyleSheet.create({
  countryFlag: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
export default App
