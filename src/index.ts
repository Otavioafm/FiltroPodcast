import * as http from "http";
import { getLitsEpisodio } from './controllers/podcast-controller'


const server=http.createServer(async(request:http.IncomingMessage, response:http.ServerResponse)=>{

    if (request.method==="GET") {
        await getLitsEpisodio(request, response);
    }


})

const port=process.env.PORT
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})




