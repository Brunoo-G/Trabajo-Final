window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let id_artista;
    let datos_artista;

    id_artista = devolver_artista_id();
    
    mostrar_info_artista(id_artista);
    mostrar_discografia_artista(id_artista);


    function devolver_artista_id()
    {
        let url_string = window.location.href;
        let url = new URL(url_string);
        return url.searchParams.get("id");
        
    }


    function mostrar_info_artista(id_artista)
    {
        let api_url = `${proxy}https://api.deezer.com/artist/${id_artista}`;
        
        fetch(api_url)
            .then(function (response){
                return response.json();
            })
            .then(function (datos){
                let artista_1 = document.querySelector('#artista_1');
                artista_1.innerHTML = `<img src="${datos.picture_medium}"><h2>${datos.name}</h2>`;
            })
            
            .catch(function(error){
                console.log("el error es:" + error)
            });
    }

    function mostrar_discografia_artista(id_artista)
    {
        let api_url = `${proxy}https://api.deezer.com/artist/${id_artista}/albums`;

        fetch(api_url)
            .then(function (response){
                return response.json();
            })
            .then(function (datos){
                albumes = datos.data;
                html = '';
                for(i=0; i<= 4; i++){
                    html += `<div class="albumes" id="album_${i}"><img src="${albumes[i].cover_medium}"><h2>${albumes[i].title}</h2></div>`;
                }
                

                let ul_albums = document.querySelector('#lista_albums')
                ul_albums.innerHTML = html;
            
            })
            
            .catch(function(error){
                console.log("el error es:" + error)
            });
    }

   

});

