import { repositoryPodcast } from "../data/podcast-repository";

export  const serviceListEpisodio =async ()=>{
    const data = await repositoryPodcast()

    return data;
}


