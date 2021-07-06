import React, {Component} from 'react';
import './DisplayCard.css';





class DisplayCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardstoDisplay: props.cards,
            index: 0
        };
    }
    handleClick = () => {
        let i = this.state.index < this.state.cardstoDisplay.length ? this.state.index += 1 : 0;
        this.setState({ index: i, 
                    cardstoDisplay: this.props.cards});
      };


    //let counter = 1;
    //let totalCards = props.cards.length();
    //console.log(totalCards);
   //console.log('display', props.cards[0]);
   render(){

   
    return(
       
            <>
                
                <div>
                    {this.state.cardstoDisplay.map((card, i) => {
                        return (
                            <h2 className='card' hidden={i >= this.state.index}>
                                
                                {card.title}
                                <h3 className='content'>{card.description}</h3>
                            </h2>
                            
                            
                        );
                        })}
                    <button className='button-position' onClick={this.handleClick}>Next</button> 
                </div>

                
              
                
             

               
                
            </>
        

       
    );
}
}

export default DisplayCard; 