// import React from 'react';
import './style.css';
import type { StoryGroup } from "../types"




type StoryListProps = {
    storyData: StoryGroup[];
    handleStoryClick: (index: number) => void;
};

export default function StoryList({ storyData, handleStoryClick }: StoryListProps) {
    return (
        <div className="storyListContainer">
            {storyData.map((storyItem, index) => (
                <div className="imgWrapper" key={storyItem.id}>
                    <img
                        src={storyItem.stories[0]}
                        alt="story"
                        height="65px"
                        width="65px"
                        className="img"
                        onClick={() => handleStoryClick(index)}
                    />
                </div>
            ))}
        </div>
    );
}
