import { id } from "date-fns/locale"

export const SelectTravelerList = [
    {
        id: 1,
        title: 'Just me',
        desc: 'A sole traveler in exploration',
        icon: '🗺',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers in tandem',
        icon:'🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '⛵',
        people: '5 to 10 People'
    },
]

export const SelectBudgetOptions=[
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵',
    },
    {
        id: 2,
        title: 'Moderate',
        desc:'Keep cost on the average side',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'When cost is not a worry',
        icon: '💸',
    }
]

export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details , Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.'