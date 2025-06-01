import React from 'react'

export default function TitleText({title, className = ''}) {
    return (
        <h1 className={`${className} text-md mt-3 mb-2`}>{title}</h1>
    )
}
