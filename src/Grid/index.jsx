import { useRef, useState } from 'react'
import './index.css'
import img12 from '../assets/images/image12.jpg'

export default function index({ images }) {
    const [state, setState] = useState(images)
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

    return (
        <div className='image-grid'>
            {state.map((image, index) => (
                <img
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                    draggable
                    src={image.url}
                    key={index}
                    className={`${index == 0 ? 'image-grid-col-2 image-grid-row-2' : ''}`}
                />
            ))}
        </div>
    )
}
