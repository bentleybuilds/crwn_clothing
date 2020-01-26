import React from 'react';

import './collectionPreview.scss'
import CollectionItem from '../collectionItem/collectionItem.jsx';

const CollectionPreview = ({ title, items }) => (
    <div className='collectionPreview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items
            .filter((item, index) => index < 4)
            .map(({id, ...otherProps}) => (
            <CollectionItem key={id} {...otherProps} /> 
        ))}
        </div>
    </div>
)

export default CollectionPreview