window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    /* Lista de artistas del home */ 
    let artistas_favoritos_id = [8706544,429675,11289472,288166,246791];
    mostrar_artitas_favoritos(artistas_favoritos_id);


    function mostrar_artitas_favoritos (array_artistas_favoritos){
        
        for(i=0; i < array_artistas_favoritos.length; i++){
          
            let url = `${proxy}https://api.deezer.com/artist/${array_artistas_favoritos[i]}`;
                
            fetch(url)
                .then(function (response){
                    return response.json();
                })
                .then (function(datos){
                    html = `<a href="detail-artist.html?id=${datos.id}"><div class="artistas" id="artista_${i}"><img src="${datos.picture_medium}"><h2>${datos.name}</h2></div></a>`;
                    let ul = document.getElementById("lista_favoritos");
                    ul.innerHTML += html;
                  
                    
                })
                .catch(function(error){
                    console.log("el error es:" + error)
                });
        }  
    }

    /* Lista de Canciones del home */
    
    fetch(`${proxy}https://api.deezer.com/track/1124841682`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_1 = document.querySelector('#cancion_1')
        cancion_1.setAttribute("data", datos.id);
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
        cancion_2.setAttribute("data", datos.id);
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
        cancion_3.setAttribute("data", datos.id);
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
        
        let cancion_4 = document.querySelector('#cancion_4')
        cancion_4.setAttribute("data", datos.id);
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
        let cancion_5 = document.querySelector('#cancion_5'); 
        cancion_5.setAttribute("data", datos.id);
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
        let album_5 = document.querySelector('#album_5')
        album_5.innerHTML = `<img src="${datos.cover_medium}"><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    document.getElementById("cancion_5").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
    document.getElementById("cancion_4").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
    document.getElementById("cancion_3").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
    document.getElementById("cancion_2").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
    document.getElementById("cancion_1").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
}); 