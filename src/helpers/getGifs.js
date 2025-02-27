export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pxPihj77HVrUeDDF0mUXyvmqNI3TxNxc&q=${ category }&limit=10`;
    //Al usar el wait se espera a que se resuelva la promesa
    //y se almacena en la constante resp, ademas debe ser async
    const resp = await fetch(url);
    //La data es la que tiene la información que necesitamos o imagenes
    //Se desestructura la respuesta y se obtiene la data
    const {data} = await resp.json();

    //Se recorre el arreglo de imagenes y se obtiene la información
    //que se necesita
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

    
}