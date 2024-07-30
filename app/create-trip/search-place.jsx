import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useContext } from 'react';
import { CreateTripContext } from "./../../context/CreateTripContext";
import SelectTraveler from './select-traveler';

export default function SearchPlace() {

    const navigation = useNavigation();
    const {tripData, setTripData} = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: "Search",
        })
    },[])

    // useEffect(()=> {
    //     setTripData(prev=>[])
    // },[selectedTraveler])

    useEffect(() => {
        console.log(tripData);
    }),[tripData]

  return (
    <View
    style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
    }}
    >

            <GooglePlacesAutocomplete
                placeholder='Search Place'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setTripData({
                        locationInfo:{
                            name: data.description,
                            coordinates: details?.geometry.location,
                            photoRef: details?.photos[0]?.photo_reference,
                            url: details?.url
                        }
                    });
                    router.push("/create-trip/select-traveler");

                }}
                query={{
                    //uses places api
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer:{
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 25
                    }
                }}
            />

    </View>
  )
}