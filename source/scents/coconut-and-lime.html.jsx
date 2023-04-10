import Scent from "../scent.html.jsx"

export const meta = {
  id: "coconut-and-lime",
}

export default (props) => {
  return (
    <Scent path={meta.id} {...props}>
      <div className="details__description layout__box o__has-rows">
        <br/>

        <p>Tropical and fruity, this scent is a rich blend of coconut, limes, orange, lemon and a hint of strawberry onto a heart of coconut, peach and floral nuances all resting on a sweet base of vanilla, sugar and musk.</p>
        <br/>

        <p><b>Top Notes:</b> Coconut, Lime, Orange, Lemon, Strawberry</p>
        <p><b>Middle Notes:</b> Coconut, Peach, Floral Notes</p>
        <p><b>Base Notes:</b> Vanilla, Sugar, Musk </p>

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