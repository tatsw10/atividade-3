const axios = require('axios')
const cheerio = require('cheerio')

exports.findall = (req, res) => {
    const articles = []

    dataGetter()

    async function dataGetter() {
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


        
            await axios.get("https://manganewsnetwork.com/")
                .then(response => {
                    const html = response.data
                    const $ = cheerio.load(html)

                    $('a:contains("Release Date")', html).each(function () {
                        const title = $(this).text()
                        const url = $(this).attr('href')

                        articles.push({
                            title,
                            url,
                            source: "Manga News Network"
                        })
                    })

                })

                await axios.get("https://animenewsandfacts.com/")
                .then(response => {
                    const html = response.data
                    const $ = cheerio.load(html)

                    $('a:contains("Release Date")', html).each(function () {
                        const title = $(this).text()
                        const url = $(this).attr('href')

                        articles.push({
                            title,
                            url,
                            source: "Anime News And Facts"
                        })
                    })

                })

                await axios.get("https://whenwill.net/anime-release-dates/")
                .then(response => {
                    const html = response.data
                    const $ = cheerio.load(html)

                    $('a:contains("Release Date")', html).each(function () {
                        const title = $(this).text()
                        const url = $(this).attr('href')

                        articles.push({
                            title,
                            url,
                            source: "When Will"
                        })
                    })

                })
        



            res.json(articles)
            


        }
}
