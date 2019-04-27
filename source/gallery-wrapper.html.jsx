export default (props) => {
  return (
    <a className="gallery-wrapper" href={`/pieces/${props.path}`}>
      <img className="gallery-image" src={`assets/images/gallery/${props.id}.jpg`} />
      <p className="gallery-description">{props.title}</p>
      <p className="gallery-price">{props.price}</p>
    </a>
  )
}