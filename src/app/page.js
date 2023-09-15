import Image from 'next/image'
import Talent from '@components/Talent';
import TalentTrack from '@components/TalentTrack';
import PointCounter from '@components/PointCounter';

export default function Home() {
  return (
    <main>
      <h1>Rune Mastery Loadout</h1>
      <section>
        <TalentTrack />
        <TalentTrack />
        <PointCounter />
      </section>
    </main>
  )
}
