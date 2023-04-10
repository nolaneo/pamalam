import Layout from "./layout.html.jsx";
import GalleryWrapper from "./gallery-wrapper.html.jsx";

export default props => {
  return (
    <Layout title="Pamalam | Scents">
      <div className="gallery margin-top-100px">
        {props.data.pamalam.candles.map((candle, index) => {
          return <GalleryWrapper key={index} subpath={"/scents"} {...candle} />;
        })}
      </div>
    </Layout>
  );
};
