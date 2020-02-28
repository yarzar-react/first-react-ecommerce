import React from 'react'
import CustomButton from '../../components/custom-button/custom-button'
import './collection-item.scss'

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div className="image"
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}
        />

        <div className="collection-footer">
             <span className='name'>{name}</span>
             <span className='price'>{price}</span>
        </div>
        <CustomButton inverted>Add to Cart</CustomButton>
    </div>
)

export default CollectionItem