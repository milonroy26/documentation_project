import ContentDisplay from '@/app/components/ContentDisplay';
import { getDocuments } from '@/lib/doc'
import { getDocumentsByAuthor } from '@/utils/doc-util';
import React from 'react'

export default function AuthorPage({ params: { name } }) {
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByAuthor(docs, name);
    return (
        <div>
            <ContentDisplay id={matchedDocuments[0].id} />
        </div>
    )
}
