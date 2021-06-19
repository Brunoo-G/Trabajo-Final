window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    /* Lista de generos */ 

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_1').innerHTML = `<a href="detail-genres.html"><h2>${datos.data[2].name}</h2></a>`
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
            document.querySelector('#genero_2').innerHTML = `<a href="detail-genres.html"><h2>${datos.data[3].name}</h2></a>`
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
            document.querySelector('#genero_3').innerHTML = `<a href="detail-genres.html"><h2>${datos.data[19].name}</h2></a>`
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
            document.querySelector('#genero_4').innerHTML = `<a href="detail-genres.html"><h2>${datos.data[5].name}</h2></a>`
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
            document.querySelector('#genero_5').innerHTML = `<a href="detail-genres.html"><h2>${datos.data[1].name}</h2></a>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });


    /* Eventos de cada genero */ 

    // document.querySelector('#genero_1').addEventListener('click' , function(){
    //     localStorage.setItem('rap', JSON.stringify(`${datos.data[2].name}`));
    // });

    // document.querySelector('#genero_2').addEventListener('click' , function(){
    //     localStorage.setItem('rap', JSON.stringify(`${datos.data[3].name}`));
    // });
    
    // document.querySelector('#genero_3').addEventListener('click' , function(){
    //     localStorage.setItem('rap', JSON.stringify(`${datos.data[19].name}`));
    // });

    // document.querySelector('#genero_4').addEventListener('click' , function(){
    //     localStorage.setItem('rap', JSON.stringify(`${datos.data[5].name}`));
    // });

    // document.querySelector('#genero_5').addEventListener('click' , function(e){
    //     e.preventDefault();
    //     localStorage.setItem('rap', JSON.stringify(`${datos.data[1].name}`));
    // });

});

