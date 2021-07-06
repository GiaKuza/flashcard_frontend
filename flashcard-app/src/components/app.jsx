import React, { Component } from 'react';
import axios from 'axios';
import './app.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


import TitleBar from './TitleBar';
import SubjectList from './SubjectList';
import DisplayCard from './DisplayCard';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            subjects: [],
            cards: [],
            currentCard : {},
            cardIndex: 0
            
        }
        //this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.getAllSubjects();
    }

    async displayFlashCards(subjectsId){
        let allSubjectCards = await axios.get('http://localhost:5000/api/collections/subject/', {
            params: {
                subjectId: subjectsId
            }
        })
        return allSubjectCards.data;
    }
    displayFlashcard(subjectsId){
        this.displayFlashCards(subjectsId);
    }

    async getAllSubjects(){
        let response = await axios.get('http://localhost:5000/api/collections/subject/all');
        console.log(response.data);
        try{
        this.setState({
            subjects: response.data,
            cards:response.data[0]
        });
    }catch(err){
        console.log(err);
    }
    }

     handleClick = (index) => { //pass index or subject id
        console.log(index);
       let selectedSubject = this.state.subjects[index];
       this.setState({
           cards: selectedSubject
       }) 
       console.log('hi', selectedSubject)
       
     }




    render(){
        console.log('here',this.state.cards.cardArray)

        return(          
            <>
                <TitleBar />
                <div>
                    <SubjectList subjects={this.state.subjects} handleClick={this.handleClick}/>
                    <DisplayCard cards={this.state.cards.cardArray}/>

                    
                </div>
                                                        
            </>
        );
    }
}

export default App;