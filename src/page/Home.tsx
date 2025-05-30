import React, { useEffect, useState } from 'react';
import type { StoryGroup } from "../types"
import StoryList from '../components/StoryList';
import "../App.css"
import StoryFullView from '../components/StoryFullView';

interface HomeProps {
    storyData: StoryGroup[];
}

const Home: React.FC<HomeProps> = ({ storyData }) => {

    const [stories, setStories] = useState<StoryGroup[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    // console.log(stories, 'stories')

    function handleStoryClick(index: number) {
        setCurrentIndex(index)
    }

    function handleClose(e?: React.MouseEvent<HTMLButtonElement>) {
        if (e) {
            e.stopPropagation()
        }
        setCurrentIndex(null)
    }

    function handleNext() {
        if (currentIndex !== null && currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            handleClose()
        }
    }

    function handlePrev() {
          if(currentIndex !== null && currentIndex > 0){
            setCurrentIndex(currentIndex -1)
          }
    }

    // console.log(stories[currentIndex ?? 0], "got clicked story details")

    useEffect(() => {
        setStories(storyData.filter((item) => item.stories.length));
    }, []);

    return (
        <div className='homeContainer'>
            {currentIndex === null && <h2>Instagram</h2>}
            {currentIndex === null ? <StoryList storyData={stories} handleStoryClick={handleStoryClick} />
                :
                <StoryFullView activeStories={stories[currentIndex ?? 0]?.stories} currentIndex={currentIndex ?? 0} handleClose={handleClose} handleNext={handleNext} handlePrev={handlePrev} />
            }
        </div>
    );
};

export default Home;
