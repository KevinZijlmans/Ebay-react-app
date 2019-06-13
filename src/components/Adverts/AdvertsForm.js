import React from 'react'

export default function Advertform(props) {
    return (
        <div className="Advert-form">
        Make an Advertisement!
            <form onSubmit={props.onSubmit}>
                <label>
                Title:
                <input type="text" name="title" onChange={props.onChange} />
                </label>
                <br />
                <label>
                Description:
                <input type="text" name="description" onChange={props.onChange} />
                </label>
                <br />
                <label>
                Email:
                <input type="text" name="email" onChange={props.onChange} />
                </label>
                <br />
                <label>
                Price:
                <input type="text" name="price" onChange={props.onChange} />
                </label>
                <br />
                <label>
                Phonenumber:
                <input type="text" name="phonenumber" onChange={props.onChange} />
                </label>
                <br />
                <label>
                Picture:
                <input type="text" name="picture" onChange={props.onChange} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )}