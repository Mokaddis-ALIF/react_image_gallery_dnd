import './index.css'

export default function index({ images }) {
    return (
        <div className='image-grid'>

            {images.map((image, index) => (

                <img src={image.url} key={index} className={`${index == 0 ? 'image-grid-col-2 image-grid-row-2' : ''}`} />


            ))}
        </div>
    )
}
