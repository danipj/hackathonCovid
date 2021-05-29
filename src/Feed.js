import { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Feed extends Component {
    
    posts = [
        <div className={"post-familiar"}>Post Familiar<br/> Oi meu amor, por aqui tudo bem! A Maria e a Naomi mandam melhoras. Beijo</div>,
        <div className={"post-paciente"}>Post Paciente <br/> Tudo bem por aqui, estou me sentindo melhor.</div>,
        <div className={"post-paciente"}>Post Paciente <br/> Audio 0:39</div>,
        <div className={"post-familiar"}>Post Familiar<br/> Video<div className="video"></div></div>,
    ]

    constructor(){
      super()
      let type = "-familiar"
      for (let index = 0; index < 5; index++) {
        if(index%2!==0){
          type="-paciente"
        }
        else{
          type = "-familiar"
        }
        this.posts.push(<div className={"post"+type}>Post {type}<br/> Lorem ipsum lorem ipsum pacas blablabla etcetecetec</div>);
      }
      this.state = {posts:this.posts}
      this.sendMessage = this.sendMessage.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});  
    }

    sendMessage(){
      console.log(this.state.value)
      let message = this.state.value
      this.setState({posts:[<div className={"post-familiar"}>Post Familiar<br/> {message}</div>, ...this.state.posts]})
    }

    render(){
      return(
        <div className="feed">
               <Form>
            <FormGroup>
        <Label for="exampleText">Envie mensagem</Label>
        <Input type="textarea" name="text" id="exampleText"  onChange={(e)=>this.handleChange(e)}/>
      </FormGroup>
      <Button onClick={()=>this.sendMessage()}>Submit</Button>
      </Form>
          { this.state.posts }
          </div>
          )
      }
}

export default Feed