'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import Talent from '@components/Talent'

const TalentTrack = ({ talentTrackData, trackState }) => {

  return (
    <>
      {talentTrackData.map((talent, index) => (
        <div key={talent.id}>
          <Talent
            talent={talent}
            talentState={trackState[trackState.findIndex(item => item.name === talent.name)]}
          />
        </div>
      )) }
    </>
  )
}

export default TalentTrack