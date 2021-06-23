window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    fetch(`${proxy}https://api.deezer.com/playlist/9202769382`)
        .then(function (response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
            document.querySelector('.cancion').innerHTML += `
            <img src="${datos.tracks.data[0].album.cover_big}">
            <h2><a href="">${datos.tracks.data[0].artist.name} </a> - ${datos.tracks.data[0].title}</h2>
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/playlist/9202769382?tracklist=false" width="1000" height="150" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })










});

