import React, { useEffect, useState } from 'react';
import type { MouseEvent } from "react"
import './style.css';
import CardSkeleton from './CardSkeleton';



interface StoryFullViewProps {
    activeStories: string[];
    currentIndex: number;
    handleClose: (e: MouseEvent<HTMLButtonElement>) => void
    handleNext: () => void;
    handlePrev: () => void
}


const StoryFullView: React.FC<StoryFullViewProps> = ({ activeStories, currentIndex, handleClose, handleNext, handlePrev }) => {

    const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    console.log(activeStories, activeStoryIndex)

    function handleImgClick(e: React.MouseEvent<HTMLDivElement>) {
        const width = e.currentTarget.offsetWidth
        const clintX = e.clientX

        // console.log(width, 'width', clintX, 'clintX')

        const isLeftClick = clintX > width / 2

        if (isLeftClick) {
            handleNext();
        } else {
            handlePrev();
        }

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (activeStoryIndex < activeStories.length - 1) {
                setActiveStoryIndex((prev) => prev + 1)
            } else {
                handleNext()
                setActiveStoryIndex(0)
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [activeStories, activeStoryIndex])


    useEffect(() => {
        setLoading(true);
        const loadTimeout = setTimeout(() => {
            setLoading(false);
        }, 500);
        setActiveStoryIndex(0);

        return () => clearTimeout(loadTimeout)
    }, [currentIndex]);


    return (
        <div className='fullViewContainer' onClick={(e) => handleImgClick(e)}>
            {loading ? <CardSkeleton height='100%' /> : <div className='fullViewImgWrapper'>
                <img
                    src={activeStories[activeStoryIndex]}
                    alt="story"
                    width="100%"
                    height="100%"
                    loading="lazy" 
                />
                <button className="closeBtn" onClick={(e) => handleClose(e)}>
                    ✕
                </button>
                <div className='progressBarContainer'>
                    <div key={activeStoryIndex} className='progressBar'>
                    </div>
                </div>
            </div>}

        </div>
    )
}


export default StoryFullView;