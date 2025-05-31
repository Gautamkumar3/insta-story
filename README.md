# Instagram Story Viewer

It is Instagram like story viewer built using **React.js** and **TypeScript**.

##  Deployment

🔗 [Live App](https://insta-story-kappa.vercel.app)

##  Getting Started

### 1. Clone the repository


git clone [<repo-link>](https://github.com/Gautamkumar3/insta-story.git)
cd insta-story

npm install

npm run dev

#  for test 

npm run test

##  Features

A list of stories visible in a smaller view in a horizontally scrollable list on home page.

The user should be able to manually navigate between stories using UI controls. Tapping on the left side of an open story should take the user to the previous story. Tapping on the right side of an open story should take the user to the next story

Automatically advance to the next one after 5 seconds



## Design Choices & Performance Optimization Summary

The app is modular, splitting logic across Home, StoryList, and StoryFullView for better maintainability.

Used lazy loading for images and conditional rendering to improve performance.

Implemented auto story progression with timers and a skeleton loader for smooth UX.

Designed to be scalable with typed props (TypeScript), reusable components, and data-driven rendering.