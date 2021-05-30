import React,{ useState, useEffect } from "react";
import { Button, Input } from 'reactstrap';
import Post from './Post';

function Feed() {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);
  const [sender, setSender] = useState('');
  const [isInputOpen, setInputOpen] = useState(false);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000/feed/12314';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((posts) => {
        const createdPosts = []
        posts.response.forEach((p, i)=> {
          p = JSON.parse(p)
          createdPosts.push(<Post type={p.origin} message={p.text}  hasVideo={false} key={i} createdAt={p.createdAt} author={p.author}/>)
        })
        setPosts(createdPosts);
      });
  }, [setPosts]);

    async function sendMessageToAPI(text,author){
      
      const rawResponse = await fetch('http://127.0.0.1:5000/message', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"patientId": 12314, "text": text, "createdAt": new Date().toISOString(), "origin": "patient", "author":author})
      });
      const content = await rawResponse.json();
  }
  function sendMessage(){
    sendMessageToAPI(message,sender)
    setPosts([<Post type="patient" message={message}  hasVideo={false} createdAt={new Date().toISOString()} author={sender}/>, ...posts])
    setMessage('')
    setSender('')
    setInputOpen(false)
  }

  return(<React.Fragment>
    <div className="ellipse red"></div>
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