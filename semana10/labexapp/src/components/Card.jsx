import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Button, Base, Listar} from '../pages/styles'

const Card = (props) => {

    const [trips, settrips] = useState([]);
    const [trip, settrip] = useState({});

    const getTrips = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcos-maia-cruz/trips`)
        .then( response => {
            settrips( response.data )
            console.log(response.data)
            console.log(trips)
        })
        .catch( err => {
            console.log(err)
        })
    }

    

    return (
        <div>
            {/* <div>{trips}</div> */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Card