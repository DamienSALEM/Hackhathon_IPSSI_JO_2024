import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import React from 'react'

const dataFiles = [
  {
    title: 'Les athlètes des JO',
    description: 'Toutes les informations sur les athlètes depuis 1960',
    fileUrl: '/data/olympic_data.csv',
  },
  {
    title: 'Les hotes des JO et PIB par année',
    description:
      'Toutes les informations sur les hotes + PIB par année et pays depuis 1960',
    fileUrl: '/data/weather_data.csv',
  },
  {
    title: 'Toutes les médailles des JO',
    description:
      'Toutes les informations sur les médailles remportées depuis 1960',
    fileUrl: '/data/demographic_data.csv',
  },
  {
    title: 'Tous les résultats des JO',
    description: 'Toutes les informations sur les résultats depuis 1960',
    fileUrl: '/data/sports_performance_data.csv',
  },
]

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
}))

const DataPaper = styled(Paper)(({ theme }) => ({
  width: 'calc(50% - 16px)', // Pour deux cartes par ligne avec un espacement de 16px entre elles
  padding: theme.spacing(3),
  backgroundColor: '#416082',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}))

const Datasets = () => {
  const handleDownload = (fileUrl) => {
    window.open(fileUrl, '_blank') // Ouvrir le lien dans un nouvel onglet
  }
  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        width="100%"
        color="#416082"
      >
        Présentation des Jeux de Données
      </Typography>
      {dataFiles.map((file, index) => (
        <DataPaper key={index} onClick={() => handleDownload(file.fileUrl)}>
          <Typography variant="h6" component="h2" gutterBottom>
            {file.title}
          </Typography>
          <Typography variant="body1">{file.description}</Typography>
        </DataPaper>
      ))}
    </Container>
  )
}

export default Datasets
