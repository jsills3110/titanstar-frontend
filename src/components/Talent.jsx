'use client'
import { useState } from 'react'
import { useCallback } from 'react'
import Image from 'next/image'

const Talent = ({ talent, talentState }) => {
  // Creating loaders for purchasing and removing talents.
  // These are not totally necessary since I'm not making calls to a server, but this is what I might do if I were.
  const [purchasing, setIsPurchasing] = useState(false)
  const [removing, setIsRemoving] = useState(false)

  // UseState for isPurchased and isPrereqMet since these may change.
  const [isPurchased, setIsPurchased] = useState(talentState.isPurchased)
  const [isPrereqMet, setIsPrereqMet] = useState(talentState.prereqMet)

  const imgSize = 50
  // Need to change this to use the state for isPurchased?
  const imgSrc = "/assets/sprites/" + talent.sprite + "-" + (talentState.isPurchased ? "enabled.png" : "disabled.png")

  const purchaseTalent = useCallback((e) => {
    setIsPurchasing(true)
    console.log(e)
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

  return (
    <>
      <button
        type="button"
        disabled={!talentState.prereqMet}
        onClick={e => purchaseTalent(e, talentState.isPurchased, talentState.prereqMet)}
        onContextMenu={e => removeTalent(e, talentState.isPurchased)}
      >
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