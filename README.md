# Flag icon Creator
![image]([https://wallpapercave.com/wp/wp2440274.jpg](https://memberfiles.freewebs.com/98/56/37315698/photos/Nato-Flags/Nato%20Member%20Flags.png))

Flag icon  Creator is a public library used to include countries flag in your react native app easly .

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Flag icon Creator.

```bash
npm i react-native-flag-creator
```

## Usage

```java
import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { CountryFlag } from 'react-native-flag-creator'

const App = () => {

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
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT License

Copyright (c) 2022 Youness Makhfi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
