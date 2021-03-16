import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import photo from "../../assets/small/commercial/0.jpg"

const Gallery = (props) => {
    const currentCategory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commerical projects"
    }
    return (
        <section>
            <h2>{ capitalizeFirstLetter(currentCategory.name) }</h2>
            <p>{ currentCategory.name }</p>
            <div>
                <img src={photo} alt="Commercial Example" className="img-thumbnail mx-1" />
            </div>    
        </section>
    )
}

export default Gallery