import Layout from "./layout.html.jsx";
import Hero from "./hero.html.jsx";
import GalleryWrapper from "./gallery-wrapper.html.jsx";

export default props => {
  return (
    <Layout title="Pamalam | New Collection">
      <Hero />
      <div className="gallery">
        {props.data.pamalam.pieces.map((piece, index) => {
          return <GalleryWrapper key={index} {...piece} />;
        })}
      </div>
      <div class="quote">
        <div class="quote__inner">
          Born between Dublin and Buenos Aires, Pamalam is about beautifully
          crafted, handmade pieces that exude bold and adventurous femininity.
          We’re inspired by the cities where we live, work and play.
        </div>
      </div>
    </Layout>
  );
};
