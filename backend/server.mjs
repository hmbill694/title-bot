import express from 'express'
import request from 'request'
import cheerio from 'cheerio'

const port = process.env.PORT || 3000

const app = express()

app.get('/getTitle/:url', (req, res) => {
  const { params: { url } } = req

  console.log(url)

  request(`http://${url}`, (error, response, body) => {
    // problem occured
    if (error || response.statusCode !== 200) {
      res.status(400).json({ message: 'Invalid URL entered' })
    }

    // use cheerio to get title
    const $ = cheerio.load(body)
    const title = $('title').text()

    // valid response
    res.status(200).json({
      url,
      title,
      message: 'Success'
    })
  })
})

app.listen(port, () => console.log(`listening on port ${port}`))
