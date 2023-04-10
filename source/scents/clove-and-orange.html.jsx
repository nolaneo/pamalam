import Scent from "../scent.html.jsx"

export const meta = {
  id: "clove-and-orange",
}

export default (props) => {
  return (
    <Scent path={meta.id} {...props}>
      <div className="details__description layout__box o__has-rows">
        <br/>

        <p>An herbal eruption, this crowd pleaser has top notes of pine, eucalyptus, orange, pear, cassis, green leaf, galbanum and strawberry,  a heart of rose, hyacinth, gardenia, orange blossom, cinnamon, clove and peach on a base of cedar, sandalwood, amber, patchouli, sugar, musk and vanilla.</p>
        <br/>

        <p><b>Top Notes:</b> Pine, Eucalyptus, Orange, Pear, Cassis, Green Leaf, Galbanum, Strawberry</p>
        <p><b>Middle Notes:</b> Rose, Hyacinth, Gardenia, Orange Blossom, Cinnamon, Clove, Peach</p>
        <p><b>Base Notes:</b> Cedar, Sandalwood, Amber, Patchouli, Sugar, Musk, Vanilla</p>

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