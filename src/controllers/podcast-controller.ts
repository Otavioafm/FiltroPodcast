import { IncomingMessage, ServerResponse } from 'http';

export const getLitsEpisodio = async (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, { 'Content-Type': 'application/json' }); 
    response.end(JSON.stringify({ name: 'carlinhos' })); 
};
