import React, {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { withRouter} from 'react-router-dom'
import {clearRecipe} from '../../actions/recipe'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import './contentCard.css'


function ContentCard(props){
    const { text, clearRecipe} = props
    const {title, imageUrl, _id, servings, time} = props.recipe

    const handleClicker = () => {
        clearRecipe()
        if(!_id){
            props.history.push(`/recipe/new`)
        }else{

        props.history.push(`/recipe/${_id}`)}
    }
            
    

    return(
        <div className="contentCard " onClick={handleClicker}>

            <div className='ContentCardImage'>
                {!imageUrl && props.titleText && <div className="fillerImgCreate"> + </div>}
                {!imageUrl && !props.titleText && <div className="fillerImg"></div>}
                {imageUrl && <img className=''src={imageUrl} alt=""/>}
                
            </div>

            <div className="ContentCardText ">
                <div className="contentCardTitleContainer ">
                    {props.titleText && <h3> {props.titleText}</h3>    }<h3>{title}</h3>
                </div>
                
                {text && !props.titleText &&
                <Fragment>
                {/* <div className=' recipeText'>
                                      
                  
                </div> */}
                <p className=' recipeText'><span className='bold'><FontAwesomeIcon icon={faUtensils} /> Servings: </span> {servings}</p>
                <p className=' recipeText'><span className='bold'><FontAwesomeIcon icon={faClock} /> Cooking Time: </span> {time}</p>
                </Fragment>
                
                }
                </div>
              
                
            
            {/* <div className="contentCardText"></div> */}
        </div>
    
    )
}

ContentCard.propTypes = {
    clearRecipe: PropTypes.func.isRequired
}

export default withRouter(connect(null, {clearRecipe})(ContentCard))


