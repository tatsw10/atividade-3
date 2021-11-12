window.onload = () => {
    (async () => {
        const url = "/anime"
        const tableBody = document.getElementById("tableData")

        var request = new Request(url)

        await fetch(request).then( async function (response) {
            var dataHtml = ""
    
            animes = await response.json()

            animes.forEach(anime => {
                dataHtml += `<tr><td><a href="${anime.url}">${anime.title}</a><td>${anime.source}</td></td></tr>`
            })
    
            tableBody.innerHTML = dataHtml
        })
    })();
}