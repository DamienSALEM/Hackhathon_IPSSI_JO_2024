import React from 'react'
import LogoIpssi from '../assets/logo_ipssi3.png'
export default function Hackhaton() {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="relative h-[400px] w-[700px] rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[#416082] opacity-85 z-0"></div>
        <div className="relative z-10">
          <div className="h-[75px] bg-[#416082] flex justify-center items-center">
            <h1 className="text-2xl text-white">Hackhaton 2023/2024 - IPSSI</h1>
          </div>
          <div className="h-[250px] flex justify-center items-center p-10">
            <p className="text-lg text-white text-center">
              Notre hackathon IA et Big Data, organisé par les étudiants de
              l'IPSSI, a pour objectif de développer des modèles prédictifs pour
              les résultats des Jeux Olympiques de Paris 2024. Pendant une
              semaine, les participants travaillent en équipes, en collaboration
              à distance, pour concevoir, développer et présenter leurs
              solutions innovantes.
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
    </section>
  )
}
