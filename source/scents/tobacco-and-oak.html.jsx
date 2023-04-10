import Scent from "../scent.html.jsx"

export const meta = {
  id: "tobacco-and-oak",
}

export default (props) => {
  return (
    <Scent path={meta.id} {...props}>
      <div className="details__description layout__box o__has-rows">
        <br/>

        <p>DA woody aroma of dry dusty tobacco, soft bergamot and sun sweetened mandarin. Hints of rock rose, black pepper and roasted nutmeg are accompanied by a heart of patchouli and gentle tobacco flower, leading to a rich base of sandalwood, sensual amber, leather and musk.</p>
        <br/>

        <p><b>Top Notes:</b> Bergamot, Mandarin</p>
        <p><b>Middle Notes:</b> Black Pepper, Nutmeg, Tobacco Flower, Patchouli</p>
        <p><b>Base Notes:</b> Sandalwood, Leather, Musk</p>

        <ul>
          <li>180gr Coconut & Rapeseed Wax Candle</li>
          <li>Amber glass jar with black Lid and cotton wick.</li>
          <li>Burn time: 35-40 hours approx. </li>
        </ul>

        <br/>

        <p><b>Special Offer: 2 for €30.</b> Choose 2 of any scent, discount applied at checkout.</p>
        <p><b>FREE SHIPPING for orders over €60.</b> Use code <b>FREE60</b> at checkout.</p>

      </div>
    </Scent>
  );
}