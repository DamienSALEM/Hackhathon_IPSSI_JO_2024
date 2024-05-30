import React, { useEffect, useState } from 'react'
import DropdownForm from '../components/DropDownForm'
import SwiperComponent from '../components/Swiper'

export default function PredictionPage() {
  const [selection, setSelection] = useState({
    problematic: '',
    country: '',
    gameEvent: '',
  })

  const [listGamesNames, setListGamesNames] = useState([])

  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch('https://hackhathon-ipssi-jo-2024.onrender.com/get-unique-column', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        table_name: 'olympic_results',
        column_name: 'discipline_title',
      }),
    })
      .then((response) => response.json())
      .then(({ discipline_title }) => setListGamesNames(discipline_title))
  }, [selection])

  console.log(listGamesNames)

  return (
    <div className="pt-20  bg-[#416082]">
      <DropdownForm
        selection={selection}
        setSelection={setSelection}
        listGamesNames={listGamesNames}
      />
      <SwiperComponent datas={datas} />
    </div>
  )
}
// Il suffit de creer un autre fetch dans le useffect. Ce fetch recupere les donnees et le place dans le state datas.
//je fait passer datas dans swiper component et je l'affiche
