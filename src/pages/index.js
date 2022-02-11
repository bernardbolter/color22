import React, { useContext, useEffect,useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { ArtworkContext } from '../providers/ArtworkProvider'

import Logo from '../components/Logo'
import Nav from '../components/Nav'

import Loading from '../components/Loading'
import ArtworkList from '../components/ArtworkList'
import ArtworkMap from '../components/ArtworkMap'

import { shuffle } from '../helpers'

import '../styles/index.scss'

const IndexPage = () => {
  const initialArtwork = useStaticQuery(graphql`
    query StrapiArtworkQuery {
      allStrapiArtwork {
        edges {
          node {
            data {
              attributes {
                city
                description
                height
                lat
                lng
                medium
                price
                publishedAt
                slug
                sold
                title
                updatedAt
                width
                wikiAccessed
                wikiLink
                wikiText
                wikiTitle
                year
              }
              id
            }
          }
        }
      }
    }
  `)

  console.log(initialArtwork)

  const [artwork, setArtwork] = useContext(ArtworkContext)
  console.log(artwork)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let shuffledArt = []
    if (initialArtwork.allStrapiArtwork.edges[0].node.data.length !== 0) {
      const originalArt = []
      initialArtwork.allStrapiArtwork.edges[0].node.data.map(art => {
        const artToPush = art.attributes
        artToPush["strapiId"] = art.id
        originalArt.push(artToPush)
      })
      shuffledArt = shuffle(originalArt)
    }
    setArtwork(state => ({ ...state, filtered: shuffledArt, original: shuffledArt }))
  }, [])

  useEffect(() => {
    if (artwork.original.length !== 0) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [artwork.original])
  
  return (
        <main className="index-container">
          {!isLoading && <Logo />}
          {!isLoading && <Nav />}
          {isLoading
            ? <Loading />
            : artwork.viewMap
              ? <ArtworkMap />
              : <ArtworkList />
          }
        </main>
  )
}

export default IndexPage