import React from 'react'
import './style.css';

interface CardSkeletonProps {
    width?: string;
    height?: string;
    borderRadius?: number | string;
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({ width = '100%', height = '16px', borderRadius = 0 }) => {
    return (
        <div
            className="Cardskeleton"
            style={{ width, height, borderRadius }}
        />
    );
};

export default CardSkeleton;
