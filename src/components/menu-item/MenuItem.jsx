import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';


const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return (

        // ${match.url} is to get the current url of the website 
        //${linkUrl} is to add the exact link we want to visit dynamically because we are using one menu item to render all our menu item

        <div onClick={()=> {history.push(`${match.url}${linkUrl}`)}}
        className = {`${size} menu-item`}  >
            <div className="background-image"
                style={{
                backgroundImage: `url(${imageUrl})`
                }}>
                    
            </div>
            
            <div className="content">
                <div className="title">
                    {title.toUpperCase()}
                </div>
                <span className="subtitle">
                    SHOP NOW
                </span>
            </div>
        </div>
    )
}

//withRouter is to help solve props drilling and make history, match and url params available
export default withRouter(MenuItem);
