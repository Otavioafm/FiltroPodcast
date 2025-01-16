import fs from "fs"
import path, { dirname } from "path"
import { Podcast } from "../models/podcast-models"





const pathDate=path.join(__dirname, "../data/podcast.json")

export const repositoryPodcast=async():Promise<Podcast[]> =>{
    const rawData=fs.readFileSync(pathDate,"utf-8")
    const jsonFile=JSON.parse(rawData)
    return jsonFile
}

