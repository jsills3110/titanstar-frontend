'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import TalentTrack from '@components/TalentTrack'
import PointCounter from '@components/PointCounter'
import InitializeStorage from '../utils/initalizeStorage'

export default function Home() {

  // Setting the Talent Track data.
  // In a full stack application, I would retrieve this information via API, NOT hardcode it into the application.
  // I'm also making an assumption that I would receive the talents in the order they need to appear on the tracks
  // to simplify my logic.
  const TalentTrackData = {
    talentPath1: [
      {
        name: "Stack",
        sprite: "stack",
        prereq: null,
        altText: "A stack sprite representing Talent Track 1, Talent 1."
      },
      {
        name: "Utensil",
        sprite: "utensil",
        prereq: "Stack",
        altText: "A fork and knife sprite representing Talent Track 1, Talent 2."
      },
      {
        name: "Cake",
        sprite: "cake",
        prereq: "Utensil",
        altText: "A cake sprite representing Talent Track 1, Talent 3."
      },
      {
        name: "Crown",
        sprite: "crown",
        prereq: "Cake",
        altText: "A crown sprite representing Talent Track 1, Talent 4."
      }
    ],
    talentPath2: [
      {
        name: "Boat",
        sprite: "boat",
        prereq: null,
        altText: "A boat sprite representing Talent Track 2, Talent 1."
      },
      {
        name: "Scuba",
        sprite: "scuba",
        prereq: "Boat",
        altText: "A scuba gear sprite representing Talent Track 2, Talent 2."
      },
      {
        name: "Lightning",
        sprite: "lightning",
        prereq: "Scuba",
        altText: "A lightning bolt sprite representing Talent Track 2, Talent 3."
      },
      {
        name: "Death",
        sprite: "death",
        prereq: "Death",
        altText: "A skull sprite representing Talent Track 2, Talent 4."
      }
    ]
  }

  const [trackState, setTrackState] = useState()

  // Initialize the track state if it does not exist yet.
  // In a full stack application, I would retrieve this information via API, not use localStorage.
  useEffect(() => {
    const fetchState = async () => {
      if (typeof window !== "undefined" && window.localStorage) {
        if (!localStorage.getItem("trackState")) {
          await InitializeStorage()
        }
        let currentTrackState = JSON.parse(localStorage.getItem("trackState"))
        setTrackState(currentTrackState)
      }
    }

    fetchState().catch(console.error)
  }, [])

  return (
    <main>
      <h1>Rune Mastery Loadout</h1>
      <section>
        <TalentTrack
          talentTrackData={TalentTrackData.talentPath1}
          trackState={trackState.talentPath1}
        />
        <TalentTrack
          talentTrackData={TalentTrackData.talentPath2}
          trackState={trackState.talentPath2}
        />
        <PointCounter />
      </section>
    </main>
  )
}
