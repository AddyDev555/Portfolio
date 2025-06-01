import React from 'react'

export default function MidText({title, className=''}) {
    return (
        <h1 className={`${className} text-xs`}>{title}</h1>
    )
}
