import React from 'react'
import BoxContentMessage from '../component/BoxContentMessage'

const ImageBox = ({ src }) => {
  return (
    <BoxContentMessage>

      <img style={{ width: '100%' }} src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg" alt="sent" />
    </BoxContentMessage>
  )
}

export default ImageBox
