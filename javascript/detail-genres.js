window.addEventListener("load", function(){
    
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            let generoElegido = JSON.parse(localStorage.getItem('rap'));
            document.querySelector('.detalleagenero').innerHTML = `<h1>${generoElegido}</h1>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
    });



});