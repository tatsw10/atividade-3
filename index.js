const PORT = process.env.PORT || 5607
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const app = express()

const newspapers = [
    {
        name: 'Manga_News_Network',
        address: 'https://manganewsnetwork.com/',
    },
    {
        name: 'Anime_News_&_Facts',
        address: 'https://animenewsandfacts.com/',
    },
    {
        name: 'When_Will',
        address: 'https://whenwill.net/anime-release-dates/',
    }

]

const articles = []

//app.METHOD(PATH, HANDLER)

newspapers.forEach(newspapers => {
    axios.get(newspapers.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('a:contains("Release Date")', html).each(function () {
            const title = $(this).text()
            const url = $(this).attr('href')

            articles.push({
                title,
                url,
                source: newspapers.name
            })
        })

    })
})

//Aquilo que aparece na pagina inicial 
app.get('/', (req , res) => {
    res.json('See the upcoming anime release')
})

//São os artigos, neste caso os lançamentos de anime
app.get('/anime', (req, res) => {
    res.json(articles)
})


app.get('/anime/:newspaperId', (req, res) => {
    const newspaperId = req.params.newspaperId

    const newspapersAddress = newspapers.filter(newspapers => newspapers.name == newspaperId)[0].address

    axios.get(newspapersAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("climate")', html).each(function (){
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url,
                    source: newspaperId
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err))
})



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
