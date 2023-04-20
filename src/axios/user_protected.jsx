import axios from "axios";

const praxios = axios.create()

praxios.defaults.baseURL = 'https://fastapi-starter.keinerex.repl.co';


export default praxios