export const getImagen = async() => {

    try {

        const apiKey = '9GRIUz2pf39IQNgKnE1sgsF1JchyFRcI';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontró la imágen';
    }
    
    
    
}

 getImagen();



