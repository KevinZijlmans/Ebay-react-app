import React from 'react'

export default function CommentForm(props) {
    return (
        <div className="Comment-form">
        <p>Create Comment Here</p>
            <form onSubmit={props.onSubmit}>
                <label>
                <input placeholder='Comment' type="text" name="text" onChange={props.onChange} />
                </label>
                <br/>
                <input className='myButton' type="submit" value="Submit" />
            </form>
        </div>
    )}