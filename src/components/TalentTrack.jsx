'use client'
import Talent from '@components/Talent'

const TalentTrack = ({ talentTrackData, trackState, trackNumber }) => {
  // Talents need
  // isPurchased
  // isPrereqMet
  // When those things change, they need to be updated.
  // Here, we need to define the functions that make those changes.
  // purchaseTalent
  // removeTalent
  // updateNextTalent

  function purchaseTalent (talentName) {
    console.log("Triggering purchaseTalent")
    let currentState = JSON.parse(localStorage.getItem("trackState"))
    console.log(currentState)
    let currentTalent = trackState.find(item => item.name === talentName)
    console.log(currentTalent)

    currentTalent.isPurchased = true
    currentState["talentPath" + trackNumber][currentTalent.name] = currentTalent

    localStorage.setItem("trackState", JSON.stringify(currentState))
  }

  return (
    <>
      {talentTrackData.map((talent, index) => (
        <div key={index}>
          <Talent
            talent={talent}
            talentState={trackState ? trackState.find(item => item.name === talent.name) : null}
            purchaseTalent={purchaseTalent}
          />
        </div>
      )) }
    </>
  )
}

export default TalentTrack