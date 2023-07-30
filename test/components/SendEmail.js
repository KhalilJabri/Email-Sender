import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SendEmail = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('spider');
    const [isModal, setisModal] = useState(false);

    const navigation = useNavigation();

    const sendRequest = async()=> {

        const response = await axios.post('http://192.168.1.13:8000/mail/send/', {
            email: email,
            name: name
        })
        // console.log('====================================');
        // console.log(response.status);
        // console.log('====================================');
        if(response.status === 200) {
            setisModal(true)
            setTimeout(() => {
                setisModal(false)
            }, 3000);
        }
    }

  return (
    <View  style={styles.container} >
        
        <Modal animationType="slide"
            transparent={true}
            visible={isModal}
            >
            <View style={styles.centeredModal}>
                <View style={styles.modalView}>
                    <View style={styles.contentModal}>
                        <Image source={require('../assets/checked-simple.gif')} style={styles.checkImage} />
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>Email sended!</Text>
                    </View>
                </View>
            </View>
        </Modal>
            <View style={styles.imageContent}>
                <Image source={require('../assets/undraw_Email_campaign_re_m6k5.png')} style={styles.image} />
            </View>
            <View style={styles.upGroup}>
                <View  style={styles.group} >
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>SendEmail : </Text>
                    <TextInput style={styles.type}
                        placeholder='set your Email'
                        onChangeText={(text)=> setEmail(text)}
                        value={email} />
                </View>
                <TouchableOpacity style={styles.button} onPress={sendRequest}>
                    <Text style={{color: '#ffffff'}}>Send</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    centeredModal: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        bottom: '15%',
        left: Dimensions.get('window').width / 3.5,
    },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentModal: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    checkImage: {
        height: 50,
        width: 50,
    },
    imageContent: {
        marginVertical: 50,
        width: '80%',
        height: '40%',
        alignSelf: 'center',
        borderRadius: 15,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    type: {
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 5,
        width: '50%',
        paddingHorizontal: 15,
        fontSize: 17,
    },
    button: {
        backgroundColor: '#252525',
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginVertical: 20,
        borderRadius: 25,
        alignSelf: 'center',
        alignItems: 'center'
    }
})

export default SendEmail