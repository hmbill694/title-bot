import express from 'express'
import cors from 'cors'
import request from 'request'
import cheerio from 'cheerio'

const port = process.env.PORT || 3000

const app = express()

app.use(cors())

app.get('/getTitle/:url', (req, res) => {
  const { params: { url } } = req

  request(`http://${url}`, (error, response, body) => {
    // problem occured
    if (error || response.statusCode !== 200 || typeof body !== 'string') {
      res.status(400).json({ message: 'Invalid URL entered' })
      return
    }

    // use cheerio to get title
    const $ = cheerio.load(body)
    const title = $('title').text()

    // valid response
    res.status(200).json({
      title,
      message: 'success'
    })
  })
})

app.listen(port, () => console.log(`listening on port ${port}`))
