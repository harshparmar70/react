const Card = (props) => {
    console.log(props)
    console.log(props.age)
    return (
        <div className="card">
            <img src={props.img} alt="photo" />
            <h1>{props.user} {props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card

