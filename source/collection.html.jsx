import Layout from "./layout.html.jsx";
import GalleryWrapper from "./gallery-wrapper.html.jsx";

export default props => {
  return (
    <Layout title="Pamalam | Collection">
      <div className="gallery margin-top-100px">
        {props.data.pamalam.pieces.map((piece, index) => {
          return <GalleryWrapper key={index} subpath={"/pieces"} {...piece} />;
        })}
      </div>
    </Layout>
  );
};
