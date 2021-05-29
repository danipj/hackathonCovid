
function Feed() {
    
    let posts = [
        <div className={"post-familiar"}>Post Familiar<br/> Oi meu amor, por aqui tudo bem! A Maria e a Naomi mandam melhoras. Beijo</div>,
        <div className={"post-paciente"}>Post Paciente <br/> Tudo bem por aqui, estou me sentindo melhor.</div>,
        <div className={"post-paciente"}>Post Paciente <br/> Audio 0:39</div>,
        <div className={"post-familiar"}>Post Familiar<br/> Video<div className="video"></div></div>,
    ]
    let type = "-familiar"
    for (let index = 0; index < 5; index++) {
      if(index%2!==0){
        type="-paciente"
      }
      else{
        type = "-familiar"
      }
      posts.push(<div className={"post"+type}>Post {type}<br/> Lorem ipsum lorem ipsum pacas blablabla etcetecetec</div>);
    }
return(<div>
      <div className="feed">
     { posts }</div>
     </div>
     )
}
     

    export default Feed