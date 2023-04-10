import Scent from "../scent.html.jsx"

export const meta = {
  id: "amber-and-citrus",
}

export default (props) => {
  return (
    <Scent path={meta.id} {...props}>
      <div className="details__description layout__box o__has-rows">
        <br/>

        <p>Fresh and complicated, prepare for juicy oranges, mandarins, tangerines and bergamot combined with a base of rich dry woods including patchouli and sandalwood nestled on a base of dark amber and musk.</p>
        <br/>

        <p><b>Top Notes:</b> Orange, Tangerine, Mandarin, Bergamot</p>
        <p><b>Middle Notes:</b> Patchouli, Sandalwood, Vetivert</p>
        <p><b>Base Notes:</b> Amber, Musk</p>

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