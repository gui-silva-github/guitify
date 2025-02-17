import React, { useState } from 'react'
import SongItem from './SongItem'

const SongList = ({ songsArray }) => {

  const [items, setItems] = useState(5)

  return (
    <>
        <div className="song-list">
            
            {
              songsArray
              .filter((currValue, index) => index < items)
              .map((currSongObj, index) => <SongItem index={index} key={index} {...currSongObj} />)
            }

            <p className="song-list__see-more" onClick={() => setItems(items + 5)}>Ver mais</p>
        </div>
    </>
  )
}

export default SongList