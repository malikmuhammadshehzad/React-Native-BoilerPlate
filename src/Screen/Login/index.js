import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/common/Button'
import { Colors } from '../../assets'
 

const  Login = () => {
  return (
    <View>
      <Text> Login</Text>
      <Button Label={"Login"} bgColor={Colors.greenishBlue} textColor={'white'} />
    </View>
  )
}

export default  Login
