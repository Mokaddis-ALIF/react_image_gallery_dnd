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
import { useState } from "react";
// import img11 from './assets/images/image-11.jpeg'


const App = () => {
  const images = [
    { id: 1, url: img11, checked: false, hover: false },
    { id: 2, url: img3, checked: false, hover: false },
    { id: 3, url: img2, checked: false, hover: false },
    { id: 4, url: img7, checked: false, hover: false },
    { id: 5, url: img5, checked: false, hover: false },
    { id: 6, url: img9, checked: false, hover: false },
    { id: 7, url: img10, checked: false, hover: false },
    { id: 8, url: img4, checked: false, hover: false },

    // Add more images here
  ];

  const [state, setState] = useState(images)
  console.log(state);


  // const selectedFiles = state.filter(item => item.checked == true)

  return (
    <div className="app">
      {/* <h1>Image Gallery</h1>
      <ImageGallery images={images} /> */}
      <div className="main">
        <div className="header">
          <div>
            {/* <label className="container">
              <input type="checkbox" checked={selectedFiles.length == 0 ? false : true} ></input>
              <span className="checkmark"></span>
            </label> */}
            <span>{ } files selected</span></div>
          <span>Delete files</span>
        </div>
        <Grid state={state} setState={setState} />
      </div>
    </div>
  );
};

export default App;
