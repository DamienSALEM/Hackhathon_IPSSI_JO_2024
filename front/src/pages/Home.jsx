import { Box, Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
// import bg from "../assets/imgJO.webp";
// import bannerParis from "../assets/bannerParis.webp";
// import bannerParis from "../assets/banner.webp";
import bannerParis from "../assets/newBanner.webp";
import DataRow from "../components/DataRow";
const axios = require('axios');



const Home = () => {
  const fichiers = [{"olympic medals": ["discipline_title", "medal_type", "country_name"]},
    {"host": ["game_year", "game_season"]},
    {"results": ["discipline_title", "country_name", "rank_position", "slug_game"]},
    {"athletes": []}
  ]
const [keysFiles, setKeysFiles] = useState(fichiers.map(obj => Object.keys(obj)[0]));
const [file, setFile] = useState("olympic medals");

  const [datas, setDatas] = useState([]);
  const [headers, setHeaders] = useState([]);

  const arrHeaders = ["Date", "Pays", "Médaille"]
  
  let arrayTestData = [
    { Date: 'Janvier', Pays: 'France', Medaille: 'Bronze' },
    { Date: 'Mars', Pays: 'Russie', Medaille: 'Argent' },
    { Date: 'Février', Pays: 'USA', Medaille: 'Or' }
  ];

  const handleChange = (event) => {
    setFile(event.target.value);
  };
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
  const getheaders = async() => {
    try {
      arrHeaders.length !== 0 ?  setHeaders(arrHeaders)  : setHeaders([])
      // arrayHeaders.length !== 0 ?  setHeaders(arrayHeaders)  : setHeaders([])
      // return arrayHeaders.data
      return arrHeaders
    } catch (error) {
      console.log("error: ", error);
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
      arrayTestData.length !== 0 ?  setDatas(arrayTestData)  : setDatas([])
      // datas.data.length !== 0 ?  setDatas(datas.data)  : setDatas([])
      // return datas.data
      return arrayTestData
    } catch (error) {
      console.log("error: ", error)
      return error
    }
  };

  useEffect(() => {
    getheaders()
    getDatas()
  }, []);

  return (
		<Box sx={{ height: "100vh", overflow: "hidden" }}>
			<Box
				sx={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
          flexDirection: "column",
					alignItems: "center",
					background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bannerParis})`,
					backgroundRepeat: "no-repeat",
					// backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<Box sx={{ minWidth: 120 }}>
					<FormControl>
						<InputLabel id="demo-simple-select-label">Fichier</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={file}
							label="fichier"
							onChange={handleChange}
						>
              {keysFiles.map((key) => {
              console.log("keysFiles: ", keysFiles);
              return <MenuItem key={key} value={key}>{key}</MenuItem>})}
						</Select>
					</FormControl>
				</Box>

				<TableContainer
					sx={{ width: "60%", maxHeight: "60%", overflowY: "scroll" }}
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
			</Box>
		</Box>
	);
};

export default Home;
