import React, {Component} from 'react';
import './DisplayCard.css';





class DisplayCard extends Component{
    constructor(props){
        super(props);
        this.state = {
           
            index: 0
        };
        
    }

    
   /*handleClick = () => {
        let i = this.state.index < this.state.cardstoDisplay.length ? this.state.index += 1 : 0;
        this.setState({ index: i, 
                    cardstoDisplay: this.props.cards});
      };*/
     nextButton = () => {
        let i = this.state.index < this.props.cards.length ? this.state.index += 1 : 0;
        console.log('state.index',this.state.index);
        //let i = this.props.cardIndex < this.props.cards.length ? this.state.index += 1 : setState(this.props.cardIndex:0);
        //console.log('props.cardIndex',this.state.index);
        this.setState({ index: i, 
                    });
      };

      prevButton = () => {
        let i = this.state.index > 0 ? this.state.index -= 1 : this.props.cards.length;
        console.log('state.index',this.state.index);
        //let i = this.props.cardIndex < this.props.cards.length ? this.state.index += 1 : setState(this.props.cardIndex:0);
        //console.log('props.cardIndex',this.state.index);
        this.setState({ index: i, 
            });
      };




    //let counter = 1;
    //let totalCards = props.cards.length();
    //console.log(totalCards);
   //console.log('display', props.cards[0]);
   render(){
    
    let flashcardsToDisplay = this.props.cards;
    console.log('flashcardsToDisplay', flashcardsToDisplay);
    //let index = this.props.cardIndex;
    
   
    return(
       
            <>
                
                <div>
                    { flashcardsToDisplay ? flashcardsToDisplay.map((card, i) => {
                        return (
                            <>
                                
                                <div className='card' hidden={i >= this.state.index}>
                                
                              
                                    <h2 className='card-title'>{card.title}</h2> 
                                    <h3 className='content'>{card.description}</h3>
                                
                                </div>
                                <span>
                                <button className='button-next' onClick={this.nextButton}>
                                    next
                                    <div >{this.state.index}/{flashcardsToDisplay.length}</div>
                                </button> 
                                
                        

                                <button className='button-prev' onClick={this.prevButton}>
                                    prev
                                    <div >{this.state.index}/{flashcardsToDisplay.length}</div>
                                </button> 
                                </span>
                                
                            </>
                            
                            
                            
                        );
                        }): "Loading..."}
                    
                </div>
                    
                
                    
                
             

               
                
            </>
        

       
    );
}

}

export default DisplayCard; 