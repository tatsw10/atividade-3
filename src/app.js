const feedDisplay = document.querySelector('#feed')


fetch('https://animereleases.herokuapp.com/anime')
    .then(response => response.json())
    .then(data => console.log(data))