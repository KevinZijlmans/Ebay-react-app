import React from 'react';
import Button from '@material-ui/core/Button';


export default function AdvertDetails(props) {
    return (
        <div>
        <div>
            <h1>{props.advert.title}</h1>       
            <p>{props.advert.description}</p>
            <p>{props.advert.email}</p>
            <p>{props.advert.phoneNumber}</p>
            <img src={props.advert.picture} alt="Productpics" height="42" width="42"/>
            <p>{props.advert.price}</p>
        </div>
        <div>
            <Button variant="contained" color="primary">
                Home
            </Button>
        </div>
        </div>
    )
}