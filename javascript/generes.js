window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_1').innerHTML = `<h2>${datos.data[1].name}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_2').innerHTML = `<h2>${datos.data[2].name}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });
    
    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_3').innerHTML = `<h2>${datos.data[3].name}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });
    
    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_4').innerHTML = `<h2>${datos.data[4].name}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_5').innerHTML = `<h2>${datos.data[1].name}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

    fetch(`${proxy}`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_6').innerHTML = `<h2>${datos.data[1].name}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

    fetch(`${proxy}`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_7').innerHTML = `<h2>${datos.data[1].name}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });
    
    fetch(`${proxy}`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_8').innerHTML = `<h2>${datos.data[1].name}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

















})