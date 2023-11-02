import Grid from "./Grid/index";
import img1 from './assets/images/image-1.webp'
import img2 from './assets/images/image-2.webp'
import img3 from './assets/images/image-3.webp'
import img4 from './assets/images/image-4.webp'
import img5 from './assets/images/image-5.webp'
import img11 from './assets/images/image-11.jpeg'
import img10 from './assets/images/image-10.jpeg'
import img7 from './assets/images/image-7.webp'
import img9 from './assets/images/image-9.webp'
// import img11 from './assets/images/image-11.jpeg'


const App = () => {
  const images = [
    { id: 1, url: img11 },
    { id: 2, url: img3 },
    { id: 3, url: img2 },
    { id: 4, url: img7 },
    { id: 5, url: img5 },
    { id: 6, url: img9 },
    { id: 7, url: img10 },
    { id: 8, url: img4 },

    // Add more images here
  ];

  return (
    <div className="app">
      {/* <h1>Image Gallery</h1>
      <ImageGallery images={images} /> */}
      <div className="main">
        <div className="header">
          <div> <span>0 files selected</span></div>
          <span>Delete files</span>
        </div>
        <Grid images={images} />
      </div>
    </div>
  );
};

export default App;
