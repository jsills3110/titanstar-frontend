'use client'
import Talent from '@components/Talent'

const TalentTrack = ({ talentTrackData, trackState }) => {
  return (
    <>
      {talentTrackData.map((talent, index) => (
        <div key={index}>
          <Talent
            talent={talent}
            talentState={trackState ? trackState.find(item => item.name === talent.name) : null}
          />
        </div>
      )) }
    </>
  )
}

export default TalentTrack