import React from 'react'
import BottomImage from '../assets/section_bottom_tower.jpg'
import FullTowerImage from '../assets/section_full_tower.jpg'
import HautImage from '../assets/section_haut_tower.jpg'
import Datasets from '../components/Datasets'
import Hackhaton from '../components/Hackhaton'
import ProjectLink from '../components/ProjectLink'
import Storytelling from '../components/Storytelling'
import Team from '../components/Team'
export default function PresentationPage() {
  return (
    <div className="h-full ">
      <div
        className="w-screen h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${HautImage})`,
          backgroundSize: 'cover',
        }}
      >
        <Storytelling />
      </div>
      <div className="w-screen ">
        <Team />
      </div>
      <div
        className="h-screen mt-18"
        style={{
          backgroundImage: `url(${FullTowerImage})`,
          backgroundSize: 'cover',
        }}
      >
        <Hackhaton />
      </div>

      <div className="w-screen">
        <Datasets />
      </div>
      <div
        className="w-screen h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${BottomImage})`,
          backgroundSize: 'cover',
        }}
      >
        <ProjectLink />
      </div>
    </div>
  )
}
