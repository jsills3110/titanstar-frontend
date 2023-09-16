'use client'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'

const Talent = ({talent}) => {
  const imgSize = 50
  const imgSrc = "/assets/sprites/" + talent.sprite + "-" + (talent.isPurchased ? "enabled.png": "disabled.png")

  // Creating loaders for purchasing and removing talents.
  // These are not totally necessary since I'm not making calls to a server, but this is what I might do if I were.
  const [purchasing, setIsPurchasing] = useState(false)
  const [removing, setIsRemoving] = useState(false)

  const purchaseTalent = useCallback((e) => {
    setIsPurchasing(true)
    try {
      console.log("Purchasing Talent")
    } catch (error) {
      console.log(error)
    } finally {
      setIsPurchasing(false)
    }
  },
    [setIsPurchasing]
  )

  const removeTalent = useCallback((e) => {
    e.preventDefault()
    setIsRemoving(true)
    try {
      console.log("Removing Talent")
    } catch (error) {
      console.log(error)
    } finally {
      setIsRemoving(false)
    }
  },
    [setIsRemoving]
  )

  useEffect(() => {
    document.addEventListener("click", purchaseTalent)
    document.addEventListener("contextmenu", removeTalent)
    return () => {
      document.removeEventListener("click", purchaseTalent)
      document.removeEventListener("contextmenu", removeTalent)
    }
  },[purchaseTalent, removeTalent])

  return (
    <>
      <button
        type="button"
        disabled={!talent.prereqMet}>
        <Image
          src={imgSrc}
          alt={talent.altText}
          width={imgSize}
          height={imgSize}
        />
      </button>
    </>
  )
}

export default Talent