import React from 'react';
import image from '../assets/image.jpg';

function Image() {
    return(
        <div>
        <center>
            <figure>
                <img src={image} alt="landscape" width="30%" height="30%"/>
                <figcaption>Foto aleatória</figcaption>
            </figure>
        </center>
        </div>
    )
}

export default Image;