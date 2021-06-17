window.addEventListener("load", function(){

    /* Lista de artistas dek home */ 

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let api_1 = `${proxy}https://api.deezer.com/artist/8706544`;

    fetch(api_1)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            let artista_1 = document.querySelector('#artista_1');
            artista_1.innerHTML = `<img src="${datos.picture_medium}"><h2>${datos.name}</h2>`;
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

    let api_2 = `${proxy}https://api.deezer.com/artist/429675`;

    fetch(api_2) 
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
            let artista_2 = document.querySelector('#artista_2');
            artista_2.innerHTML = `<img src="${datos.picture_medium}"><h2>${datos.name}</h2>`;
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

    let api_3 = `${proxy}https://api.deezer.com/artist/11289472`;
   
    fetch(api_3) 
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let artista_3 = document.querySelector('#artista_3');
        artista_3.innerHTML = `<img src="${datos.picture_medium}"><h2>${datos.name}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
    
    let api_4 = `${proxy}https://api.deezer.com/artist/288166`;
   
    fetch(api_4) 
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let artista_4 = document.querySelector('#artista_4');
        artista_4.innerHTML = `<img src="${datos.picture_medium}"><h2>${datos.name}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
    
    let api_5 = `${proxy}https://api.deezer.com/artist/10583405`;
   
    fetch(api_5) 
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let artista_5 = document.querySelector('#artista_5');
        artista_5.innerHTML = `<img src="${datos.picture_medium}"><h2>${datos.name}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
    
    /* Lista de Canciones del home */

    fetch(`${proxy}https://api.deezer.com/track/1124841682`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_1 = document.querySelector('#cancion_1')
        cancion_1.innerHTML = `<img src="${datos.album.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
    
    fetch(`${proxy}https://api.deezer.com/track/62724015`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_2 = document.querySelector('#cancion_2')
        cancion_2.innerHTML = `<img src="${datos.album.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
    
    fetch(`${proxy}https://api.deezer.com/track/1370066842`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_3 = document.querySelector('#cancion_3')
        cancion_3.innerHTML = `<img src="${datos.album.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
   
    fetch(`${proxy}https://api.deezer.com/track/1280165222`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_4 = document.querySelector('#cancion_4')
        cancion_4.innerHTML = `<img src="${datos.album.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    fetch(`${proxy}https://api.deezer.com/track/1390823292`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_5 = document.querySelector('#cancion_5')
        cancion_5.innerHTML = `<img src="${datos.album.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    /* Lista de Albumes del home */

    fetch(`${proxy}https://api.deezer.com/album/217794942`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let album_1 = document.querySelector('#album_1')
        album_1.innerHTML = `<img src="${datos.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    fetch(`${proxy}https://api.deezer.com/album/211423112`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let album_2 = document.querySelector('#album_2')
        album_2.innerHTML = `<img src="${datos.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    fetch(`${proxy}https://api.deezer.com/album/82541262`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let album_3 = document.querySelector('#album_3')
        album_3.innerHTML = `<img src="${datos.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    fetch(`${proxy}https://api.deezer.com/album/185413242`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let album_4 = document.querySelector('#album_4')
        album_4.innerHTML = `<img src="${datos.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    
    fetch(`${proxy}https://api.deezer.com/album/182811182`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let album_5 = document.querySelector('#album_5')
        album_5.innerHTML = `<img src="${datos.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

}); 