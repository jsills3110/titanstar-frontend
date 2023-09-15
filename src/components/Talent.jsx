'use client'
import { useState } from 'react'
import Image from 'next/image'

const Talent = ({
  isPurchased, sprite, prereqMet
}) => {
  const imgSize = 50
  const imgSrc = "/assets/sprites/" + sprite + "-" + (isPurchased ? "enabled.png": "disabled.png")

  return (
    <>
      <button
        type="button"
        disabled={!prereqMet}>
        <Image
          src={imgSrc}
          alt="Temporary alt text"
          width={imgSize}
          height={imgSize}
        />
      </button>
    </>
  )
}

export default Talent