window.addEventListener("load", function(){

    let queryString = location.search
    let queryStringObj = new URLSearchParams(queryString)
    let resultadoDeBusqueda = queryStringObj.get("busqueda")

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    fetch(`${proxy}https://api.deezer.com/search?q=${resultadoDeBusqueda}`)
            .then(function (response){
                return response.json();
            })
            .then (function(datos){
                console.log(datos);
                document.querySelector('.resultado').innerHTML = `<img src="${datos.data[0].artist.picture_medium}"><h2>${datos.data[0].artist.name}</h2>`;
            
            })
            .catch(function(error){
                console.log("el error es:" + error)
            });

})