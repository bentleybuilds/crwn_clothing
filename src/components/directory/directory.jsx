import React from 'react'
import MenuItem from '../menuItem/menuItem'
import './directory.scss'

class Directory extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sections: [
              {
                  title: 'hats',
                  imageUrl: '.crwn_clothing/images/hats.png', 
                  id: 1,
                  linkUrl: 'shop/hats'
          
              },
              {
                  title: 'jackets',
                  imageUrl: '.crwn_clothing/images/jackets.png', 
                  id: 2,
                  linkUrl: 'shop/jackets'
              },
              {
                  title: 'sneakers',
                  imageUrl: '.crwn_clothing/images/sneakers.png', 
                  id: 3,
                  linkUrl: 'shop/sneakers'
              },
              {
                  title: 'womens',
                  imageUrl: '.crwn_clothing/images/womens.png', 
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
              },
              {
                  title: 'mens',
                  imageUrl: '.crwn_clothing/images/men.png', 
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
              }
          ]
        }
    }
    render(){
        return (
            <div className='directoryMenu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))   
                }
            </div>
        )
    }
}

export default Directory;
