const express = require('express')
require('dotenv').config()
const app = express()
const path = require('path')
app.set('view engine', 'ejs')


// Spécifier le doissier contenant les fichiers statics
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/Dashboard', (req, res) => {
    res.render('dash') 
})
app.get('/organisme', (req, res) => {
    res.render('organisme') 
})
app.get('/appart', (req, res) => {
    res.render('apparts') 
})
app.get('/habilitation', (req, res) => {
    res.render('habilitation') 
})
app.get('/utilisateur', (req, res) => {
    res.render('utilisateur') 
})
app.get('/typeHabilitation', (req, res) => {
    res.render('typeHabilitation') 
})
// gestion du courrier
app.get('/courrier', (req, res) => {
    res.render('courriel')
})
app.get('/courrier-recu', (req, res) => {
    res.render('courriel_recu')
})
app.get('/courrier-sortant', (req, res) => {
    res.render('courrier_sortant')
})
app.get('/annotation', (req, res) => {
    res.render('annotation')
})
app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`)
})