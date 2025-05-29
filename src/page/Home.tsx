import React, { useEffect, useState } from 'react';
import type { StoryGroup } from "../types"
import StoryList from '../components/StoryList';
import "../App.css"

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

    console.log(stories[currentIndex ?? 0], "got clicked story details")

    useEffect(() => {
        setStories(storyData.filter((item) => item.stories.length));
    }, []);

    return (
        <div className='homeContainer'>
            <h2>Instagram</h2>
            <StoryList storyData={stories} handleStoryClick={handleStoryClick} />
        </div>
    );
};

export default Home;
