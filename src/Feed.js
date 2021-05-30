import React,{ useState } from "react";
import { Button, Input } from 'reactstrap';
import Post from './Post';

function Feed() {
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');
  const [isInputOpen, setInputOpen] = useState(false);
  
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
    let type = "familiar"
    setPosts([<Post type={type} message={message}  hasVideo={false}/>, ...posts])
    setMessage('')
    setInputOpen(false)
  }

  return(<React.Fragment>
    <div className="ellipse"></div>
    <h1 className="title">MURAL</h1>
    {isInputOpen?
      <div className="input-feed">
        <Input placeholder="Quem está enviando a mensagem?" type="text" value={sender} onChange={(e)=>setSender(e.target.value)}/>
        <Input placeholder="Deixe sua mensagem" type="textarea" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <Button className="button-send" onClick={()=>sendMessage()}>ENVIAR</Button>
      </div>:
      <div className="input-closed" onClick={()=>setInputOpen(true)}>Deixe sua mensagem</div>
    }
    <div className="feed">
      { posts }
    </div>
    </React.Fragment>
    )
}

export default Feed