import homeimg from '../../homeimg.png'
import GetPost from '../../hooks/GetPost'

const Post = () => {
  const {post} = GetPost()
  console.log(post)
  return (
      
        <div className="card" style={{ maxWidth: "50rem", margin: "1rem", display:"flex", flexDirection:"row"}}>
          <img src={homeimg} className="card-img-top" alt="..." style={{width:"5em"}} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
    
  )
}

export default Post
