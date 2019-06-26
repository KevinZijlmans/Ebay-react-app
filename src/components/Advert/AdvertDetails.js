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
            <img src={props.advert.picture} alt="Productpics"/>
            <p>Price: {props.advert.price}</p>
            {console.log('adverts', props.advert)}
            {!props.advert.comments && 'Loading...'}
                 { 
                     props.advert.comments && <div>
                         <h1>Comments</h1>
                         <ul>
                             {props.advert.comments && props.advert.comments.map(comment => {
                                 return <li key={comment.id}>
                                     <i>{comment.author}</i>
                                     <p>{comment.text}</p>
                                 </li>
                             })}
                         </ul>
        </div>}
        </div>
        {/* <div>
            <Button variant="contained" color="primary">
                Home
            </Button>
        </div> */}
        </div>
    )
}