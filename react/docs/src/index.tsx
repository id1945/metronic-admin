import React from 'react'
import ReactDOM from 'react-dom'
import {Chart, registerables} from 'chart.js'

// Apps
import {App} from './app/App'
import './_metronic/assets/sass/style.scss'
import 'bootstrap'
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env
Chart.register(...registerables)

ReactDOM.render(<App basename={PUBLIC_URL} />, document.getElementById('root'))
