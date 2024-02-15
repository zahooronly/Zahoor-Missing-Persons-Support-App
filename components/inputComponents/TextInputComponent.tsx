import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../constants/Constants'

const TextInputComponent = () => {
    const [name, setName] = React.useState('')
  return (
    <View>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text:string) => setName(text)}
          value={name}
        />
    </View>
  )
}

export default TextInputComponent


const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:Colors.BORDER_COLOR,
        padding:10,
        margin:10,
        borderRadius:5
    }
})