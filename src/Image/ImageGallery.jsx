import React from 'react';

const ImageGallery = ({ images }) => {
    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <div key={index} className={`image-item ${image.feature ? 'feature-image' : ''}`}>
                    <img src={image.url} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
