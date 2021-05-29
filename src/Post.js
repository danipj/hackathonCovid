function Post(props) {
    return(
        <div className={"post-"+props.type}>
            Post de {props.type}<br/>
            {props.message}<br/>
            {props.hasVideo?<div>Video<div className="video"></div></div>:''}
        </div>
    )
}

export default Post;