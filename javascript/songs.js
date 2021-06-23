window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    fetch(`${proxy}https://api.deezer.com/playlist/9202769382/tracks`)
        .then(function (response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
            document.querySelector('.cancion-1').innerHTML += `
            <img src="${datos.data[0].album.cover_big}">
            <h2><a href="">${datos.data[0].artist.name} </a> - ${datos.data[0].title}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })

    fetch(`${proxy}https://api.deezer.com/playlist/9202769382/tracks`)
        .then(function (response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
            document.querySelector('.cancion-2').innerHTML += `
            <img src="${datos.data[1].album.cover_big}">
            <h2><a href="">${datos.data[1].artist.name} </a> - ${datos.data[1].title}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })
    
    fetch(`${proxy}https://api.deezer.com/playlist/9202769382/tracks`)
        .then(function (response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
            document.querySelector('.cancion-3').innerHTML += `
            <img src="${datos.data[2].album.cover_big}">
            <h2><a href="">${datos.data[2].artist.name} </a> - ${datos.data[2].title}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })

    fetch(`${proxy}https://api.deezer.com/playlist/9202769382/tracks`)
        .then(function (response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
            document.querySelector('.cancion-4').innerHTML += `
            <img src="${datos.data[3].album.cover_big}">
            <h2><a href="">${datos.data[3].artist.name} </a> - ${datos.data[3].title}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })

    fetch(`${proxy}https://api.deezer.com/playlist/9202769382/tracks`)
        .then(function (response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
            document.querySelector('.cancion-5').innerHTML += `
            <img src="${datos.data[6].album.cover_big}">
            <h2><a href="">${datos.data[6].artist.name} </a> - ${datos.data[6].title}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })

    fetch(`${proxy}https://api.deezer.com/playlist/9202769382/tracks`)
        .then(function (response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
            document.querySelector('.cancion-6').innerHTML += `
            <img src="${datos.data[5].album.cover_big}">
            <h2><a href="">${datos.data[5].artist.name} </a> - ${datos.data[5].title}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })















});

