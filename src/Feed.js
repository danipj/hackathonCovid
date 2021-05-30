import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Post from './Post';

function Feed() {
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000/feed/12314';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((posts) => {
        const createdPosts = []
        posts.response.forEach((p, i)=> {
          p = JSON.parse(p)
          createdPosts.push(<Post type={p.origin} message={p.text}  hasVideo={false} key={i}/>)
        })
        setPosts(createdPosts);
      });
  }, [setPosts]);

    async function sendMessageToAPI(text){
      
      const rawResponse = await fetch('http://127.0.0.1:5000/message', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"patientId": 12314, "text": text, "createdAt": new Date().toISOString(), "origin": "patient", "author":"Agora Vai"})
      });
      const content = await rawResponse.json();
  }
  function sendMessage(){
    let message = value
    //setPosts([<Post type={type} message={message}  hasVideo={false}/>, ...posts])
    sendMessageToAPI(message)
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