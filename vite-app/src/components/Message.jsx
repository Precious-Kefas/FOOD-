import { Component } from "react";

//this ishow to use state,here we are to createa button that will change welcome visitor to subscribe, we cant use props for this as it is immutabele
//the first step is to create a state obj and initialize it. thi s is done inside the class constructor. then initialize an obj here it is welcome visitor
//the second step is to bind this.state value in h render by using this.state.message in render function
//step three add html for a btn element. we need to add parenthsisi to the return amd an enclsounng frqgment tag. for the ( ) its because is more than one line of coode
// the final stepis to listen to an event on the button and change the message.to the event we assigne a handler called this.changeMessage()which is within{} and has an arrow func.
//then define the method changeMessage betwen the render and Class Meesage. and add the setstate method whuch accepts obj which is the new state  of the comp
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message:"Welcome Visitor"

        }
    }

    changeMessage() {
        this.setState({
            message:"Thank you for subscribing"
        })
    }


  render() {
      return (
        <>
              <h2>{this.state.message}</h2>;
              <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </>
      ); 
  }
}

export default Message;
