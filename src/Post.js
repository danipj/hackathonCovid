function Post(props) {

    function timeSince(date) {
        var seconds = Math.floor((new Date() - new Date(date)) / 1000);
        var interval = seconds / 31536000;
        if (interval > 1) {
          return Math.floor(interval) + " anos";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " meses";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " dias";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " horas";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutos";
        }
        return Math.floor(seconds) + " segundos";
    }
    return(
        <div className={"post-"+props.type}>
            <div className="post-title">{props.author}</div>
            <div className="article">{props.message}</div>
            {props.hasVideo?<div>Video<div className="video"></div></div>:''}
            <div className="footer">{props.createdAt?timeSince(props.createdAt):''}</div>
        </div>
    )
}

export default Post;