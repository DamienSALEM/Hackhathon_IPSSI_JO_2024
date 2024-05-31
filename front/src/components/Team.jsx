import React from 'react'

import { Box, Grid, Paper, Typography } from '@mui/material'

const teamMembers = [
  { name: 'Damien SALEM', role: 'Chef de projet', class: 'M2' },
  { name: 'Kenuhn RIMBERT', role: 'Back-end', class: 'M1' },
  { name: 'Hadjar Adam ABAKAR', role: 'Back-end', class: 'M1' },
  { name: 'Bilele AZZOUNI', role: 'Back-end', class: 'M1' },
  { name: 'Said BOHUI', role: 'Front-End', class: 'M2' },
  { name: 'Madi NIAKATE', role: 'Front-End', class: 'M1' },
  { name: 'Allan CHAUVIN', role: 'IA', class: 'M2' },
  { name: 'Joris Monteillet', role: 'IA', class: 'M2' },
]

export default function Team() {
  return (
    <Box sx={{ margin: '20px 0' }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className="text-center"
        color="#416082"
      >
        Présentation de l'équipe
      </Typography>
      <Grid container spacing={2}>
        {teamMembers.map((member, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Paper
              elevation={3}
              sx={{
                padding: '20px',
                textAlign: 'left',
                width: '300px',
                bgcolor: '#416082',
                color: 'white',
              }}
            >
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="body1">Rôle: {member.role}</Typography>
              <Typography variant="body2">Classe: {member.class}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
