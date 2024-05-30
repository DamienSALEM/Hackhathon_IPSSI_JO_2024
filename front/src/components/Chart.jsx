// Chart.jsx
import React from 'react'
import { Line, Bar, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js'

// Enregistre les composants de chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Tooltip, Legend)

const ChartComponent = ({ type = 'line', data, options }) => {
    const ChartTypes = {
        line: Line,
        bar: Bar,
        pie: Pie,
        doughnut: Doughnut,
        radar: Radar,
        polarArea: PolarArea,
        bubble: Bubble,
        scatter: Scatter,
    }

    const SelectedChart = ChartTypes[type]

    return <SelectedChart data={data} options={options} />
}

export default ChartComponent
