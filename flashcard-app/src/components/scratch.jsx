this.state = {
    subjects: [
        {   
            id: "",
            name: "",
            selected : false,
            flashCards : [
                {
                    id: "",
                    title: "",
                    description: "",
                    cardIndex : 0,
                    
                }
            ]
        }
    ]
    
}
<TitleBar />
<div>
    {this.state.subjects.map(subject => (
        <div key = {subject._id} className="subject-div">
        
            <select>
                <option>{subject.name} </option>
            </select>
            
        </div>
    ))}
    
    
</div>


--------
import React from 'react';
import './DisplayCard.css';
import Slider from "react-slick";




function DisplayCard(props){


    //let counter = 1;
    //let totalCards = props.cards.length();
    //console.log(totalCards);
   //console.log('display', props.cards[0]);
    return(
       
            <>
                <div className='card'> 
                <h2 >
                    {/*props.cards[0].title*/}
                </h2>

                <h3>
                    {/*props.cards[0].description*/}   
                </h3>
                
             

                </div>
                
            </>
        

       
    );
}

export default DisplayCard; 