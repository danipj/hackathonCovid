import { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Post from './Post';

class Feed extends Component {
    
    posts = [
        <Post type={"familiar"} message={"Oi meu amor, por aqui tudo bem! A Maria e a Naomi mandam melhoras. Beijo"}  hasVideo={false}/>,
        <Post type={"paciente"} message={"Tudo bem por aqui, estou me sentindo melhor."}  hasVideo={false}/>,
        <Post type={"paciente"} message={"Audio 0:39"}  hasVideo={false}/>,
        <Post type={"familiar"} message={''} hasVideo={true}/>,
    ]

    constructor(){
      super()
      let type="";
      for (let index = 0; index < 5; index++) {
        if(index%2!==0){
          type="paciente"
        }
        else{
          type = "familiar"
        }
        this.posts.push(<Post type={type} message={"Lorem ipsum lorem ipsum pacas blablabla etcetecetec"}  hasVideo={false}/>);
      }
      this.state = {posts:this.posts}
    }

    handleChange(event) {
      this.setState({value: event.target.value});  
    }

    sendMessage(){
      let message = this.state.value
      let type = "familiar"
      this.setState({posts:[<Post type={type} message={message}  hasVideo={false}/>, ...this.state.posts], value:''})
    }

    render(){
      return(
        <div className="feed">
          <Form>
            <FormGroup>
              <Label for="exampleText">Envie mensagem</Label>
              <Input type="textarea" name="text" id="exampleText" value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
            </FormGroup>
            <Button onClick={()=>this.sendMessage()}>Enviar</Button>
          </Form>
          { this.state.posts }
        </div>
        )
      }
}

export default Feed