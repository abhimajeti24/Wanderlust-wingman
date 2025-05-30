import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({flightData}) {
    const flightlink = flightData?.booking_url;
  return (
    <View style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15
    }}>
        <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <Text style={{
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}>🛫 Flights</Text>
            <TouchableOpacity onPress={()=>Linking.openURL(flightlink)}
            style={{
                backgroundColor: Colors.PRIMARY,
                padding: 5,
                width: 100,
                borderRadius: 7,
                marginTop: 10,
            }}>
                <Text style={{
                    textAlign: "center",
                    color: Colors.WHITE,
                    fontFamily: "outfit",
                }}>Book Here{}</Text>
            </TouchableOpacity>
        </View>
      <Text style={{
        fontFamily: "outfit",
        fontSize: 17,
        marginTop: 10
      }}>Price: {flightData?.price}</Text>
      
    </View>
  )
}