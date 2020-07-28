import React from 'react'

export default function movieList({movielist}) {
const {completed, title, userid} = movielist;

    return (
        <div>
           <li>{title}</li> 
            <li>{userid}</li>
            <li>{userid}</li>
        </div>
    )
}
