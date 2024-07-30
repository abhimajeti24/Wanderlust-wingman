import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();

  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')}
        style={{
            width: '100%',
            height: 520,
        }}
      />
      <View style={styles.container}>
        <Text style={{
            fontSize: 28,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
        }}>Wanderlust Wingman</Text>
        
        <Text style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: '#7d7d7d',
            marginTop: 20
        }}>Discover your next adventure effortlessly. Personalized itenaries at your fingertips. Travel smarter with AI-driven insights</Text>
        
        <TouchableOpacity style={styles.button}
            onPress={() => router.push('auth/sign-in')}
        >
            <Text style={{
                color: '#FFF',
                textAlign:"center",
                fontFamily: "outfit",
                fontSize: 17
            }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginTop: -20,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25
    },

    button: {
        padding:15,
        backgroundColor: '#000',
        borderRadius: 99,
        marginTop: '20%',
    }
})