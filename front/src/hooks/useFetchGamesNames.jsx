import { useEffect, useState } from 'react'
export default function useFetchGamesNames() {
  const [listGamesNames, setListGamesNames] = useState([])

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
  }, [])
  return listGamesNames
}
