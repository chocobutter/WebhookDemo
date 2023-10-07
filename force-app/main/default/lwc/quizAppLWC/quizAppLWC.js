import { LightningElement, track } from 'lwc';

export default class QuizAppLWC extends LightningElement {

    //for storing answers
    selected={};
    isSubmitted = false;
    correctAnswers=0;
    myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop.",
            answer:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invalid in LWC component folder",
            answer:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the following is not a directive",
            answer:{
                a:"for:each",
                b:"@track",
                c:"if:true",
            },
            correctAnswer:"b"
        }
    ]

    //used for disabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    changeHandler(event){
        console.log("name: ", event.target.name)
        console.log("value: ", event.target.value)
        const {name, value} = event.target

        this.selected={...this.selected, [name]:value}
    }
    
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        console.log("this.correctAnswers", this.correctAnswers);
        this.isSubmitted = true;
    }
    resetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted = false;
    }

    //dynamic styling
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' :'slds-text-color_error'}`
    }
}