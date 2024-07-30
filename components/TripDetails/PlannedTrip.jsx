import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function PlannedTrip({details}) {
  return (
      <View style={{
        marginTop: 20,
      }}>
      <Text style={{
        fontFamily: "outfit-bold",
        fontSize: 20,
      }}>🏕 Plan Details</Text>

      {Object.entries(details).map(([day_plans, details])=>(
        <View>
            <Text style={{
                fontFamily: "outfit-bold",
                fontSize: 25,
                marginTop: 20
            }}>{details.day}</Text>
            {details.schedule.map((places, index)=>(
                <View style={{
                    marginTop: 10,
                    borderWidth: 1,
                    padding: 5,
                    borderColor: Colors.GRAY,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        fontFamily:"outfit-medium",
                        fontSize: 20,
                    }}>{places?.place}</Text>
                    <Text style={{
                        fontFamily:"outfit",
                        fontSize: 15,
                        color: Colors.GRAY
                    }}>{places?.details}</Text>
                    <Text style={{
                        fontFamily: "outfit",
                        fontSize: 15
                    }}>🎟 Ticket Price:  {places?.ticket_price}</Text>
                    <Text style={{
                        fontFamily: "outfit",
                        fontSize: 15
                    }}>⏱ Time to Spend:  {places?.time_to_spend}</Text>
                </View>
            ))}
        </View>
      ))}

    </View>
  )
}