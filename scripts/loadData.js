window.onload = () => {
    (async () => {
        const url = "/api/gpus"
        const tableBody = document.getElementById("tableData")

        var request = new Request(url)

        await fetch(request).then( async function (response) {
            var dataHtml = ""
    
            gpus = await response.json()

            gpus.forEach(gpu => {
                dataHtml += `<tr><td><a href="${gpu.url}">${gpu.gpuName}</a><td>${gpu.price}</td></td><td><a href="${gpu.sellerUrl}"</a> ${gpu.sellerName} </td></tr>`
            })
    
            tableBody.innerHTML = dataHtml
        })
    })();
}