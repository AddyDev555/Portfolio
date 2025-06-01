import React from 'react'

export default function subText({title, className = ''}) {
    return (
        <p className={`${className} text-xs text-slate-400`}>{title}</p>
    )
}
