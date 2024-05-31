import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import React from 'react'

const dataFiles = [
  {
    title: 'Base de données des Jeux Olympiques',
    description:
      'Informations officielles fournies par le Comité International Olympique (CIO) sur les performances passées des athlètes et les résultats des compétitions.',
    fileUrl: '/data/olympic_data.csv',
  },
  {
    title: 'Données météorologiques',
    description:
      'Fournies par des services météorologiques comme Météo France, comprenant les conditions climatiques historiques et prévisionnelles pendant les périodes des Jeux Olympiques.',
    fileUrl: '/data/weather_data.csv',
  },
  {
    title: 'Données démographiques et socio-économiques',
    description:
      "Provenant d'organismes comme l'INSEE (Institut National de la Statistique et des Études Économiques) et d'autres bases de données publiques.",
    fileUrl: '/data/demographic_data.csv',
  },
  {
    title: 'Données sur les performances sportives',
    description:
      'Issues de bases de données sportives spécialisées, telles que celles de Sports Reference et Olympedia.',
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
