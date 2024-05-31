import React from 'react'
import { styled } from "@mui/material/styles"
import { TableCell, TableRow, tableCellClasses } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#17222F",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#070F04",
    color: "white",
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

const DataRow = ({ data }) => {
  const values = Object.values(data)
  return (
    <StyledTableRow>
      {values.map((value, index) => (
        <StyledTableCell key={index}>{value}</StyledTableCell>
      ))}
    </StyledTableRow>
  )
}

export default DataRow
