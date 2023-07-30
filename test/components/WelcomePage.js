import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const WelcomePage = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.upImage}>
            <Image source={require('../assets/undraw_hey_email_liaa.png')} style={styles.image} />
        </View>
        <View style={styles.title}>
            <Text style={{fontSize: Dimensions.get('window').width / 13, color: '#252525'}}>
                Send Email
            </Text>
        </View>
          <View style={styles.description}>
              <Text style={{textAlign: 'center'}}>
                  you can send email orginazed, just set an email to who you wanna send
              </Text>
          </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('send-mail')}>
            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Enter</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    upImage: {
        borderRadius: 15,
        height: '40%',
        width: '100%',
        alignSelf: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    title: {
        alignItems: 'center',
        paddingVertical: '5%',
    },
    description: {
        height: '15%',
        width: '70%',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'

    },
    button: {
        backgroundColor: '#252525',
        paddingVertical: 7,
        paddingHorizontal: 25,
        alignSelf: 'center',
        borderRadius: 25,
        marginVertical: '10%'
    }
})

export default WelcomePage