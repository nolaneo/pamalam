import Scent from "../scent.html.jsx"

export const meta = {
  id: "bergamot-and-patchouli",
}

export default (props) => {
  return (
    <Scent path={meta.id} {...props}>
      <div className="details__description layout__box o__has-rows">
        <br/>

        <p>Decadent & multi layered scent that invigorates & soothes. Bergamot's fresh, bright, and uplifting aroma combined with the deep musk of patchouli makes this candle a firm favourite.</p>
        <br/>

        <p><b>Top Notes:</b> Bergamot, Orange</p>
        <p><b>Middle Notes:</b> Jasmine</p>
        <p><b>Base Notes:</b> Patchouli</p>

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