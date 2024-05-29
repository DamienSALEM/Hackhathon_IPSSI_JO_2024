import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import bg from "../assets/imgJO.webp";
// import bannerParis from "../assets/bannerParis.webp";
// import bannerParis from "../assets/banner.webp";
import bannerParis from "../assets/newBanner.webp";
import DataRow from "../components/DataRow";
const axios = require('axios');



const Home = () => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#17222F",
  // backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
},
[`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: "#070F04",
        color: "white"
},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#9C27B0"),
  backgroundColor: "#9C27B0",
  "&:hover": {
    backgroundColor: "#7B1EA2",
  },
}));


  const [datas, setDatas] = useState([]);
  
  let arrayTestData = [
    { Date: 'Janvier', Pays: 'France', Medaille: 'Bronze' },
    { Date: 'Mars', Pays: 'Russie', Medaille: 'Argent' },
    { Date: 'Février', Pays: 'USA', Medaille: 'Or' }
  ];

  const getDatas = async () => {
    try {
      let datas = await axios.get(`http://localhost:8000`);
      console.log("datas: ", datas.data);
      setDatas(arrayTestData);
      return datas.data;
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };

  useEffect(() => {
    // getDatas();
    setDatas(arrayTestData);
  }, []);

  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bannerParis})`,
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box>
          
        </Box>
        <TableContainer sx={{ width: "60%", maxHeight: "40%", overflowY: "scroll" }}>
          <Table stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Citation</TableCell>
                <TableCell />
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
