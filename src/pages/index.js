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
    query PaintingsQuery {
      allAColorfulHistoryJson {
        nodes {
          city
          description
          height
          id
          lat
          lng
          medium
          slug
          sold
          price
          title
          width
          wikiLink
          wikiTitle
          year
          wikiAccessed
          painting {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1
                tracedSVGOptions: {alphaMax: 1.5}
                layout: CONSTRAINED
                jpgOptions: {progressive: true}
                formats: AUTO
              )
            }
          }
          og {
            childImageSharp {
              gatsbyImageData(
                tracedSVGOptions: {alphaMax: 1.5}
                layout: CONSTRAINED
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
    }
  `)

  const [artwork, setArtwork] = useContext(ArtworkContext)
  console.log(artwork)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let shuffledArt = []
    if (initialArtwork.allAColorfulHistoryJson.nodes.length !== 0) {
      shuffledArt = shuffle(initialArtwork.allAColorfulHistoryJson.nodes)
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