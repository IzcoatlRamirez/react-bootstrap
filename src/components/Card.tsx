
function Card(props:{title:string,image:string,url:string|undefined}) {
  return (
    <div className="card text-center animate__animated animate__fadeInDownBig"> 
        <div className="overflow-hidden">
        <img className="img-fluid card-img-top" src={props.image}></img>
        </div>
        <div className="card-body">
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-text text-secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi 
            necessitatibus quos ab maiores inventore tempora porro tempore velit ea 
            laborum consequuntur nesciunt soluta obcaecati eaque, quidem eveniet. 
            Ex, enim.
            </p>
            <a href={props.url} className='btn btn-outline-danger' target="_blank">
                Go to this website
            </a>
        </div>
    </div>
  )
}

export default Card