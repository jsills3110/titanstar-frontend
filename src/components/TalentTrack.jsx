'use client'
import Talent from '@components/Talent'

const TalentTrack = (talentTrackData) => {
  console.log(talentTrackData)
  return (
    <>
      {talentTrackData.talentTrackData.map((talent, index) => (
        <div key={talent.id}>
          <Talent
            talent = {talent}
          />
        </div>
      )) }
    </>
  )
}

export default TalentTrack