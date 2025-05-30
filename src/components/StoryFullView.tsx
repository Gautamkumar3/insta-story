import React, { useState } from 'react';
import type { MouseEvent } from "react"
import './style.css';



interface StoryFullViewProps {
    activeStories: string[];
    currentIndex: number;
    handleClose: (e: MouseEvent<HTMLButtonElement>) => void
    handleNext: () => void;
    handlePrev: () => void
}


const StoryFullView: React.FC<StoryFullViewProps> = ({ activeStories, currentIndex, handleClose, handleNext, handlePrev }) => {

    const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

    function handleImgClick(e: React.MouseEvent<HTMLDivElement>) {
        const width = e.currentTarget.offsetWidth
        const clintX = e.clientX

        console.log(width, 'width', clintX, 'clintX')

        const isLeftClick = clintX > width / 2

        if (isLeftClick) {
            handleNext();
        } else {
            handlePrev();
        }

    }

    return (
        <div className='fullViewContainer' onClick={(e) => handleImgClick(e)}>
            <div className='fullViewImgWrapper'>
                <img
                    src={activeStories[activeStoryIndex]}
                    alt="story"
                    width="100%"
                    height="100%"
                />
                <button className="closeBtn" onClick={(e) => handleClose(e)}>
                    ✕
                </button>
            </div>
        </div>
    )
}


export default StoryFullView;