import React from 'react'

export default function Advertform(props) {
    return (
        <div className="Advert-form">
        Make an Advertisement!
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    )}