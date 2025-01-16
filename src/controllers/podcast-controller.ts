import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodio } from '../services/list-episodio-service';

export const getLitsEpisodio = async (request: IncomingMessage, response: ServerResponse) => {

    const content=await serviceListEpisodio()

    response.writeHead(200, { 'Content-Type': 'application/json' }); 
    response.end(JSON.stringify(content)); 

};
