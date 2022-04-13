import axios from "axios"

const getAlbumList = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users/1/albums");
    return resp.data;
}

const  getAlbum = async id => {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    return resp.data;
}   

export {
    getAlbumList,
    getAlbum
    
}
