'use client'
import { useState } from 'react'
import Image from 'next/image'

const Talent = () => {
  const isPurchased = false
  const imgSrcEnabled = "/assets/sprites/stack-enabled.png"
  const imgSrcDisabled = "/assets/sprites/stack-disabled.png"
  const imgSize = 50

  return (
    <div>
      {isPurchased ? (
        <Image
          src={imgSrcEnabled}
          alt="Temporary alt text"
          width={imgSize}
          height={imgSize}
        />
      ) : (
        <Image
          src={imgSrcDisabled}
          alt="Temporary alt text"
          width={imgSize}
          height={imgSize}
        />
      )}
    </div>
  )
}

export default Talent