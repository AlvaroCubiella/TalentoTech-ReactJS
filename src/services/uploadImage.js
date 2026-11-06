const IMGBB_API_KEY = "91f43146d8692ad1b006c95186e73980"
const ENDPOINT = "https://api.imgbb.com/1/upload"

export const uploadImage = async (file) => {
    const formData = new FormData()
    formData.append("image", file)
    
    try{
        // Armo el str del endpoint para subir las imagenes
        const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, 
            {
                method: "POST",
                body: formData,
            });

        // Espero la respuesta del body de la request
        const data = await response.json()

        // Si no vuelve nada, entonces, emito un mensaje de error
        if (!data.success) {
            throw new Error ("No se pudo subir la imagen")
        }

        // obtengo la url de la imagen en mi ImgBB
        return data.data.url        
    } catch (error) {
        console.error("ImgBB error: ", error)
        throw error
    }
};