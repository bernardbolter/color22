import React, { useState, useEffect, createContext } from 'react'

import { shuffle } from '../helpers'

export const ArtworkContext = createContext()

const ArtworkProvider = ({ children }) => {
    const [artwork, setArtwork] = useState({
        original: [],
        filtered: [],
        checked: [],
        sorting: '',
        searchTerm: '',
        viewMapOnboarding: false,
        currentPainting: '',
        currentCity: 'San Francisco',
        navOpen: false,
        viewMap: false,
        viewContact: false,
        viewGates: false,
        artworkURL: 'https://madeinberlin.net/artwork/'
    })

    useEffect(() => {
        var sortingArray, filterArray, searchArray
        if (artwork.sorting === 'random') {
            sortingArray = shuffle(artwork.original)
            // setArtwork(state => ({ ...state, filtered: [...shuffle(artwork.original)] }))
        } else {
            console.log(artwork.original)
            sortingArray = artwork.original
        }
        console.log(sortingArray)
        // if (artwork.checked.length !== 0) {
        //     filterArray = sortingArray.filter(item => item.includes(artwork.checked))
        // } else {
        //     filterArray = sortingArray
        // }
        setArtwork(state => ({ ...state, filtered: [...sortingArray] }))
    }, [artwork.sorting, artwork.checked, artwork.original])

    return (
        <ArtworkContext.Provider
            value={[artwork, setArtwork]}
        >
            {children}
        </ArtworkContext.Provider>
    )
}


export default ({ children }) => (
    <ArtworkProvider>
        {children}
    </ArtworkProvider>
)