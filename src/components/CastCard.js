import React from 'react'
import { IMG_CDN } from '../utils/Constants'

const CastCard = ({profile_path, name}) => {
    if(profile_path)
  return (
    <div>
        <div className="w-48 pr-8 bg-black">
            <img  className="rounded-lg" src={IMG_CDN+profile_path} alt="cast-Profile"/>
            <span className="text-white">{name}</span>
        </div>
    </div>
  )
}

export default CastCard