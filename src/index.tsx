import * as React from 'react'
import { Image, NativeModules } from 'react-native'

export const CountryFlag = (props: any) => {
  return (
    <Image
      style={props.style}
      source={{
        uri: `https://flagcdn.com/w160/${props.countryCode?.toLowerCase()}.png`,
      }}
    />
  )
}

export default NativeModules.RNFlagCreatorModule
