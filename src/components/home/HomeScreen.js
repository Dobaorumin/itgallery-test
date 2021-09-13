import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deleteSavedImage, startRandomImage } from '../../actions/images'
import {logout} from "../../actions/login"
import { formatMedia } from '../../helpers/formatMedia'

export const HomeScreen = () => {

    const dispatch = useDispatch()

    const {fileSizeBytes,url} = useSelector(state => state.images)
    const formated = formatMedia(url)

    const handleGetImage = () => {
        dispatch(startRandomImage())
    }

    const handleLogout = () => {
        dispatch(logout())
        dispatch(deleteSavedImage())
    }




    return (
        <>
        <div className="home__main-container">
            <div className="home__content">
            <h1 className="home__title">No presiones el botón</h1>
            <p className="home__warning">(Riesgo de morir de ternura)</p>
            <button className="btn btn-primary" onClick={handleGetImage}>No pulsar</button>
            <div className="home__img-wrap">
                {formated === "mp4" | "webm" ? <video autoPlay loop className="home__image" src={url}></video> : <img className="home__image" src={url} alt={url}></img>}
            </div>
                    {fileSizeBytes && <p className="home__filesize"> File Size: {fileSizeBytes} Bytes</p>}
                    <button onClick={handleLogout}className="btn btn-warning">Salir</button>
            </div>
        </div>
        </>
    )
}
