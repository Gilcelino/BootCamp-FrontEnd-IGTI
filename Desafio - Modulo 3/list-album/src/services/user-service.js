import axios from "axios"

const getUsers =  async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users/");
    return resp.data;
}   

export { getUsers}