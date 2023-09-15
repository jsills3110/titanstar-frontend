'use client'
import Talent from '@components/Talent'

const TalentTrack = () => {

  return (
    <>
      <Talent
        isPurchased={true}
        sprite="stack"
        prereqMet={true}
      />
    </>
  )
}

export default TalentTrack