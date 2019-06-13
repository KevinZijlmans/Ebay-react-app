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
                                    <Link to={`/adverts/${advert.id}`}>{advert.title}</Link>
                                    <br/>
                                    <img src={advert.picture} alt='product'/>

                                </li>
                            })}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}




