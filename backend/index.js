// creating a local servier with the port number: 4000

const express = require('express')

const app = express()

const port_number = 4000

// middleware setup
app.use(express.json())

// database setup (MongoDB or dbeaver), 4/8/2024 or 4/15/2024

// route for handling prisoner related features
const prisonerRoute = require('./routes/prisonerRoute')
const guardRoute = require('./routes/guardRoute')
app.use('/prisoner', prisonerRoute)
app.use('/guard', guardRoute)


app.listen(port_number, () => {
    console.log(`server is running on http://localHost:${port_number}`)
})

// to run the backend server use `node index.js`