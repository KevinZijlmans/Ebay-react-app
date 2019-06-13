import {Link} from 'react-router-dom';
import * as React from 'react';
import {Component} from 'react';



export default class AdvertsList extends Component {
    

    render() {
       
        const { adverts } = this.props
        
        return (
            <div>
                {!adverts && 'Loading...'}
                { 
                    adverts && <div>
                        <h1>Welcome to eKAy!</h1>
                        <ul>
                            {adverts && adverts.map(advert => {
                                return <li key={advert.id}>
                                    <img src={advert.picture} alt='product'/>
                                    <p></p>
                                    <Link to={`/adverts/${advert.id}`}>{advert.title}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}



