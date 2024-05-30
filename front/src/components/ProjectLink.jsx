import React from 'react'
import LogoIpssi from '../assets/logo_ipssi3.png'
import ButtonLink from './Button'
export default function projectLink() {
  return (
    <div className="relative h-[400px] w-[700px] rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-[#416082] opacity-85 z-0"></div>
      <div className="relative z-10">
        <div className="h-[75px] bg-[#416082] flex justify-center items-center">
          <h1 className="text-2xl text-white">Liens utiles</h1>
        </div>
        <div className="h-[250px] flex justify-center items-center p-10">
          <p className="text-lg text-white">
            <ButtonLink
              to="https://github.com/DamienSALEM/Hackhathon_IPSSI_JO_2024/tree/main"
              target="_blank"
            >
              Voir le GitHub
            </ButtonLink>
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
