import React from 'react'

export default function page({ params: { name } }) {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
