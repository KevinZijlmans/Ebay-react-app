import React from 'react'
import Button from '@material-ui/core/Button'

export default function Advertform(props) {
    return (
        <div className="Advert-form">
        <p>Make an Advertisement!</p>
        Fill in the form and click Create to make an advert.
            <form onSubmit={props.onSubmit}>
                <label>
                <input type="text" name="title" onChange={props.onChange} placeholder='Title' />
                </label>
                <br />
                <label>
                <input type="text" name="description" onChange={props.onChange} placeholder='Description' />
                </label>
                <br />
                <label>
                <input type="text" name="email" onChange={props.onChange} placeholder='E-mail'/>
                </label>
                <br />
                <label>
                <input type="text" name="price" onChange={props.onChange} placeholder='Price' />
                </label>
                <br />
                <label>
                <input type="text" name="phonenumber" onChange={props.onChange} placeholder='Phone-number' />
                </label>
                <br />
                <label>
                <input type="text" name="picture" onChange={props.onChange} placeholder='Picture-url'/>
                </label>
                <br/>
                <Button input type="submit" variant="contained" color="primary">
                    Create
                </Button>
            </form>
        </div>
    )}