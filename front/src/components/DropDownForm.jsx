import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function DropDownForm({
  selection,
  setSelection,
  listGamesNames,
  listCountryNames,
}) {
  function handleChange(e) {
    setSelection({ ...selection, [e.target.name]: e.target.value })
  }

  console.log(selection)

  return (
    <div className="ml-10 mr-10  bg-white rounded-lg shadow-md">
      <form className="space-y-6">
        <div className="w-full pl-5 pr-5 pt-5">
          <FormControl fullWidth>
            <InputLabel id="problematic">Problématique</InputLabel>
            <Select
              labelId="problematic"
              id="problematic"
              value="medalsNumberByPib"
              label="Problématique"
              onChange={handleChange}
              name="problematic"
              className="w-full"
            >
              <MenuItem value="medalsNumberByPib">
                Prédiction du nombre total de médaille par PIB
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* <div className="w-full pl-5 pr-5 pb-5">
          <FormControl fullWidth>
            <InputLabel id="gameEvent">Epreuve</InputLabel>
            <Select
              labelId="gameEvent"
              id="gameEvent"
              value={selection.gameEvent}
              label="gameEvent"
              onChange={handleChange}
              name="gameEvent"
              className="w-full"
            >
              {listGamesNames.map((gameName, index) => (
                <MenuItem key={index} value={gameName}>
                  {gameName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div> */}
        {/* {selection.problematic === 'problematique5' && ( */}
        <div className="w-full pl-5 pr-5 pb-5">
          <FormControl fullWidth>
            <InputLabel id="country">Pays</InputLabel>
            <Select
              labelId="country"
              id="country"
              value={selection.country}
              label="Pays"
              onChange={handleChange}
              name="country"
              className="w-full"
            >
              {Object.entries(listCountryNames).map(([country, values]) => (
                <MenuItem key={country} value={values}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {/* )} */}
      </form>
    </div>
  )
}
