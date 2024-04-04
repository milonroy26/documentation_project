import ContentDisplay from '@/app/components/ContentDisplay'
import React from 'react'

export default function page({ params: { subContentId } }) {
    return (
        <>
            <ContentDisplay id={subContentId} />
        </>
    )
}
