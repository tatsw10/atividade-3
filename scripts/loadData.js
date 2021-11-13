window.onload = () => {
    getdata()

    async function getdata(){
        const url = "/anime"
        var request = new Request(url)
      
        await fetch(request).then( async function (response) {
            let dataHtml = ""
      
            var animes = await response.json()
            console.log(animes)
            animes.forEach(anime => {
                dataHtml += `<tr>
                <td>${anime.title}</td>
                <td><a href=${anime.url}> Link </a></td>
                <td>${anime.source}</td>
                </tr>`;
            })
    
            document.getElementById("tableData").innerHTML = dataHtml
        })
    }
    
}