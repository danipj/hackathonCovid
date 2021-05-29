import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Post from './Post';

function Feed() {
  const [value, setValue] = useState('');
  
  let mock = [
    <Post type={"familiar"} message={"Oi meu amor, por aqui tudo bem! A Maria e a Naomi mandam melhoras. Beijo"}  hasVideo={false}/>,
    <Post type={"paciente"} message={"Tudo bem por aqui, estou me sentindo melhor."}  hasVideo={false}/>,
    <Post type={"paciente"} message={"Audio 0:39"}  hasVideo={false}/>,
    <Post type={"familiar"} message={''} hasVideo={true}/>,
  ]
  
  let type="";
  for (let index = 0; index < 5; index++) {
    if(index%2!==0){
      type="paciente"
    }
    else{
      type = "familiar"
    }
    mock = [...mock,<Post type={type} message={"Lorem ipsum lorem ipsum pacas blablabla etcetecetec"}  hasVideo={false}/>];
  }
  const [posts, setPosts] = useState(mock);

  function sendMessage(){
    let message = value
    let type = "familiar"
    setPosts([<Post type={type} message={message}  hasVideo={false}/>, ...posts])
    setValue('')
  }

  return(
    <div className="feed">
      <Form>
        <FormGroup>
          <Label for="exampleText">Envie mensagem</Label>
          <Input type="textarea" name="text" id="exampleText" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </FormGroup>
        <Button onClick={()=>sendMessage()}>Enviar</Button>
      </Form>
      { posts }
    </div>
    )
}

export default Feed