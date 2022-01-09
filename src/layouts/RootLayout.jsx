import React from 'react'
import { default as ArtworkProvider } from '../providers/ArtworkProvider'

const RootLayout = ({ element }) => (
    <ArtworkProvider>
        { element }
    </ArtworkProvider>
)

export default RootLayout