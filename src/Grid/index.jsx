import { useRef, useState } from 'react'
import './index.css'
import img12 from '../assets/images/image12.jpg'

export default function index({ state, setState }) {
    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {

        dragItem.current = position;
    };

    const dragEnter = (e, position) => {

        dragOverItem.current = position;
    };

    const drop = (e) => {

        const copyListItems = [...state];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setState(copyListItems);
    };

    const checkedHandler = (e, id) => {
        console.log(id);
        const imageIndex = state.findIndex(item => item.id == id);
        const imageUpdate = state.find(item => item.id == id);
        // console.log(imageUpdate);
        const copyListItems = [...state];
        copyListItems[imageIndex] = { ...imageUpdate, checked: !imageUpdate.checked }
        // console.log(copyListItems);
        setState(copyListItems)
    }



    // const dynamicStyle = {
    //     backgroundColor: isHovered ? 'blue' : '',
    //     color: 'white',
    //     padding: '10px',
    // };

    const mouseEnterHandler = (id) => {
        console.log(id);
        const imageIndex = state.findIndex(item => item.id == id);
        const imageUpdate = state.find(item => item.id == id);
        // console.log(imageUpdate);
        const copyListItems = [...state];
        copyListItems[imageIndex] = { ...imageUpdate, hover: true }
        // console.log(copyListItems);
        // return
        setState(copyListItems)

    }

    const mouseLeaveHandler = (id) => {
        console.log(id);
        const imageIndex = state.findIndex(item => item.id == id);
        const imageUpdate = state.find(item => item.id == id);
        // console.log(imageUpdate);
        const copyListItems = [...state];
        copyListItems[imageIndex] = { ...imageUpdate, hover: false }
        // console.log(copyListItems);
        // return

        setState(copyListItems)

    }

    return (
        <div className='image-grid'>
            {state.map((image, index) => (
                <div
                    className={`${index == 0 ? 'image-grid-col-2 image-grid-row-2' : ''} main-div`}
                    key={index}
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                    draggable={!image.checked}
                    style={{ opacity: image.checked ? 0.6 : 1 }}
                >


                    <label className="container" >
                        <input

                            type="checkbox" checked={image.checked} onChange={e => checkedHandler(e, image.id)}></input>
                        <span className="checkmark"></span>
                    </label>
                    <img
                        // Disable dragging if image is checked
                        src={image.url}
                        className='grid-img'
                    // onMouseEnter={() => mouseEnterHandler(image.id)}
                    // onMouseLeave={() => mouseLeaveHandler(image.id)}
                    // style={dynamicStyle}
                    // style={{
                    //     // backgroundColor: image.hover == true ? '#808080' : '',
                    //     // opacity: image.hover == true ? 0.5 : '',
                    //     // transition: image.hover == true ? 'opacity 0.25s' : ''
                    // }}
                    />
                    {
                        !image.checked &&
                        <div class="overlay">
                            <div class="text"></div>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}
