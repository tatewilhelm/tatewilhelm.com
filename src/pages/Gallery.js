import "./Gallery.css";
import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import photos from "./Photos";

export default function Gallery() {
    return (
        <body>
            <div className="Gallery">
                <div className="Gallery-body">
                        <div className="Gallery-content">
                            <Link to="/" className="Back"><p className="Back">&lt;back to home&gt;</p></Link>
                            <h1>Gallery</h1>
                            <MasonryPhotoAlbum photos={photos} />
                        </div>
                </div>
            </div>
        </body>

    );
}