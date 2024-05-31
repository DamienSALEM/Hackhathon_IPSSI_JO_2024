import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function DropDownForm({
  selection,
  setSelection,
  listGamesNames,
}) {
  function handleChange(e) {
    setSelection({ ...selection, [e.target.name]: e.target.value })
  }

  return (
    <div className="ml-10 mr-10  bg-white rounded-lg shadow-md">
      <form className="space-y-6">
        <div className="w-full pl-5 pr-5 pt-5">
          <FormControl fullWidth>
            <InputLabel id="problematic">Problématique</InputLabel>
            <Select
              labelId="problematic"
              id="problematic"
              value={selection.problematic}
              label="Problématique"
              onChange={handleChange}
              name="problematic"
              className="w-full"
            >
              <MenuItem value="problematique1">problématique 1</MenuItem>
              <MenuItem value="problematique2">Problématique 2</MenuItem>
              <MenuItem value="problematique3">Problématique 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-full pl-5 pr-5 pb-5">
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
        </div>
        {selection.problematic === 'problematique5' && (
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
                <MenuItem value="country1">Pays 1</MenuItem>
                <MenuItem value="country2">Pays 2</MenuItem>
                <MenuItem value="country3">Pays 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
      </form>
    </div>
  )
}
