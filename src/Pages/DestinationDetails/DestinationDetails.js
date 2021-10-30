import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DestinationDetails = () => {
    const { id } = useParams();
    const [destination, setDestination]=useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/destinationDetails/${id}`)
        .then(res => res.json())
            .then(data => setDestination(data))
    },[])
    return (
        <div>
            
            <h1>{destination.name}</h1>
            <h1>details id : {id}</h1>
            
        </div>
    );
};

export default DestinationDetails;