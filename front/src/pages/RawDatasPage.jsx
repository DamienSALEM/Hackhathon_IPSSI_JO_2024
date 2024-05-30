import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import bannerParis from '../assets/newBanner.webp'
import ChartComponent from '../components/Chart'
import DataRow from '../components/DataRow'
const axios = require('axios')

const RawDatasPage = () => {
  const fichiers = [
    { 'olympic medals': ['discipline_title', 'medal_type', 'country_name'] },
    { host: ['game_year', 'game_season'] },
    {
      results: [
        'discipline_title',
        'country_name',
        'rank_position',
        'slug_game',
      ],
    },
    { athletes: [] },
  ]
  const [keysFiles, setKeysFiles] = useState(
    fichiers.map((obj) => Object.keys(obj)[0]),
  )
  const [file, setFile] = useState('')
  const [champ, setChamp] = useState('')
  const [datas, setDatas] = useState([])
  const [headers, setHeaders] = useState([])

  const arrHeaders = ['Date', 'Pays', 'Médaille']

  let arrayTestData = [
    { Date: 'Janvier', Pays: 'France', Medaille: 'Bronze' },
    { Date: 'Mars', Pays: 'Russie', Medaille: 'Argent' },
    { Date: 'Février', Pays: 'USA', Medaille: 'Or' },
  ]

  const handleChange = (event) => {
    setFile(event.target.value)
    setChamp('')
  }

  const handleChangeChamp = (event) => {
    setChamp(event.target.value)
  }

  const handleSearch = async () => {
    try {
      let research = await axios.post('http://localhost:8000/search', {
        file,
        champ,
      })
      console.log(research.data)
      setDatas(research.data)
    } catch (error) {
      console.log('error: ', error)
      return error
    }
  }
  // const getheaders = async() => {
  //   try {
  //     let arrayHeaders = await axios.get(`http://localhost:8000/getData`)
  //     console.log("arrayHeaders: ", arrayHeaders.data)
  //     arrHeaders.length !== 0 ?  setHeaders(arrHeaders)  : setHeaders([])
  //     // arrayHeaders.length !== 0 ?  setHeaders(arrayHeaders)  : setHeaders([])
  //     // return arrayHeaders.data
  //     return arrHeaders
  //   } catch (error) {
  //     console.log("error: ", error)
  //     return error
  //   }
  // }
  const getheaders = async () => {
    try {
      arrHeaders.length !== 0 ? setHeaders(arrHeaders) : setHeaders([])
      // arrayHeaders.length !== 0 ?  setHeaders(arrayHeaders)  : setHeaders([])
      // return arrayHeaders.data
      return arrHeaders
    } catch (error) {
      console.log('error: ', error)
      return error
    }
  }

  // const getDatas = async () => {
  //   try {
  //     let datas = await axios.get(`http://localhost:8000/getData`)
  //     console.log("datas: ", datas.data)
  //     arrayTestData.length !== 0 ?  setDatas(arrayTestData)  : setDatas([])
  //     // datas.data.length !== 0 ?  setDatas(datas.data)  : setDatas([])
  //     // return datas.data
  //     return arrayTestData
  //   } catch (error) {
  //     console.log("error: ", error)
  //     return error
  //   }
  // };
  const getDatas = async () => {
    try {
      arrayTestData.length !== 0 ? setDatas(arrayTestData) : setDatas([])
      // datas.data.length !== 0 ?  setDatas(datas.data)  : setDatas([])
      // return datas.data
      return arrayTestData
    } catch (error) {
      console.log('error: ', error)
      return error
    }
  }

  useEffect(() => {
    getheaders()
    getDatas()
  }, [])

  const selectedFile = fichiers.find((obj) => Object.keys(obj)[0] === file)
  const champs = selectedFile ? selectedFile[file] : []

  const chartData = {
    labels: datas.map((item) => item.Date),
    datasets: [
      {
        label: 'Médaille',
        data: datas.map((item) => item.Médaille),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <Box sx={{ height: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          // background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bannerParis})`,
          background: `url(${bannerParis})`,
          backgroundRepeat: 'no-repeat',
          // backgroundPosition: "center",
          backgroundSize: 'cover',
          pt: '10%',
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'space-around',
            mb: 2,
          }}
        >
          <FormControl sx={{ minWidth: 120, backgroundColor: 'white' }}>
            <InputLabel id="select-file-label" sx={{}}>
              Fichier
            </InputLabel>
            <Select
              labelId="select-file-label"
              id="select-file"
              value={file}
              label="Fichier"
              onChange={handleChange}
            >
              {keysFiles.map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120, backgroundColor: 'white' }}>
            <InputLabel id="select-champ-label">Champ</InputLabel>
            <Select
              labelId="select-champ-label"
              id="select-champ"
              value={champ}
              label="Champ"
              onChange={handleChangeChamp}
              disabled={!file.length} // Disable if no champs available
            >
              {champs.map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            sx={{ backgroundColor: 'red', color: 'white' }}
            disabled={!file || !champ}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <TableContainer
          sx={{ width: '60%', height: '60%', overflowY: 'scroll' }}
        >
          <Table stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((data, key) => (
                <DataRow key={key} data={data} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            width: '60%',
            height: '400px',
            mt: 4,
            backgroundColor: 'white',
            mb: 5,
          }}
        >
          <ChartComponent type="line" data={chartData} options={chartOptions} />
        </Box>
      </Box>
    </Box>
  )
}

export default RawDatasPage
