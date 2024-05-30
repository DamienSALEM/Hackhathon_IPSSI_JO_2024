import React from 'react'
import LogoIpssi from '../assets/logo_ipssi3.png'

export default function Storytelling() {
  return (
    <div className="relative h-[400px] w-[700px] rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-[#416082] opacity-85 z-0"></div>
      <div className="relative z-10">
        <div className="h-[75px] bg-[#416082] flex justify-center items-center">
          <h1 className="text-2xl text-white">Notre Aventure</h1>
        </div>
        <div className="h-[250px] flex justify-center items-center p-10">
          <p className="text-lg text-white text-center">
            Bienvenue sur le site officiel de notre hackathon, une aventure
            palpitante qui rassemble les élèves du "Mastère Développement web,
            Big Data & IA" d'IPSSI Paris. Nous sommes un groupe d'étudiants
            passionnés, issus de différents campus de notre école, unis par un
            défi commun : mettre en pratique nos compétences pour relever un
            défi technologique de grande envergure.
          </p>
        </div>
        <div className="h-[75px] flex justify-between">
          <div className="h-[75px] w-48 text-white flex justify-center items-center">
            <p>Master Big Data & IA</p>
          </div>
          <div
            className="h-[75px] w-32"
            style={{
              backgroundImage: `url(${LogoIpssi})`,
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
