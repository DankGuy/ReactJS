import React from 'react';
import CommentDetail from './CommentDetail';
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';

const App = () => {
    return (
        <div className='ui container comemnts'>
            <CommentDetail 
            author="Sam" 
            timeAgo={ faker.date.past().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}) } 
            contentText={ faker.lorem.sentence() } 
            avatar={ faker.image.avatar() }
            />

            <CommentDetail 
            author="James" 
            timeAgo={ faker.date.past().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}) } 
            contentText={ faker.lorem.sentence()} 
            avatar={ faker.image.avatar() }
            />
        </div>
    );
};


// DOM
const root = createRoot(document.getElementById('root'));
root.render(<App />);