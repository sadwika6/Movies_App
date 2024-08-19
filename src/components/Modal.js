import React from "react";

const Modal = ({ show, onClose, movie }) => {
    if (!show) {
        return null;
    }
    const imageUrl = process.env.REACT_APP_IMAGE_URL;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{movie.title}</h2>
                <img src={`${imageUrl}${movie.backdrop_path}`} alt={movie.title} className="image" />
                <h3>Release Date - {movie.release_date}</h3>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default Modal;