export default function FeaturesItem (props) {
    return (
        <div className="feature-item"> 
            <img src={props.source} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}