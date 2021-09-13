import { types } from "../types/types"
import axios from "axios"


export const startRandomImage = () => {
    return async(dispatch) => {

        const URL = "https://random.dog/woof.json";

        const {data} = await axios.get(URL)

        const {fileSizeBytes,url} = data

        dispatch(saveImage(fileSizeBytes,url))
    }
}

export const saveImage = (fileSize,url) => ({
    type:types.saveImage,
    payload:{
        fileSizeBytes:fileSize,
        url:url
    }
})

export const deleteSavedImage = () => ({
    type:types.deleteSavedImage,
})