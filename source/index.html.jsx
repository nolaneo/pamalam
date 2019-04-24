import Layout from "./layout.html.jsx"
import Hero from "./hero.html.jsx";
import GalleryWrapper from "./gallery-wrapper.html.jsx";

export default (props) => {
  return (
    <Layout title="Pamalam | New Collection">
      <Hero></Hero>
      <div className="gallery">
        {props.data.pamalam.pieces.map(piece => {
          return <GalleryWrapper {...piece}></GalleryWrapper>
        })}
      </div>
    </Layout>
  )
}