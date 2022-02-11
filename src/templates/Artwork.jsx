import React from 'react'

import "../styles/artwork.scss"
import { graphql } from 'gatsby'

export default function ArtworkPage({data}) {
    const art = data.aColorfulHistoryJson
    console.log(art)
    return (
        <div className="artwork-container">
            <p>{art.city}</p>
            <p>{art.description}</p>
        </div>
    )
}

export const query = graphql`
    query ArtworkPage($slug: String) {
        aColorfulHistoryJson(slug: {eq: $slug}) {
        city
        description
        height
        id
        lat
        lng
        medium
        price
        slug
        sold
        title
        width
        wikiAccessed
        wikiLink
        wikiTitle
        year
        }
    }
`