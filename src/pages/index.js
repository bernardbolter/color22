import React, { useContext } from "react"

import {ArtworkContext} from '../providers/ArtworkProvider'

import '../styles/index.scss'

const IndexPage = () => {
  const [artwork, setArtwork] = useContext(ArtworkContext)
  console.log(artwork)
  return (
      // <ArtworkProvider>
        <main className="index-container">
          <p>ACH 8</p>
        </main>
      // </ArtworkProvider>
  )
}

export default IndexPage