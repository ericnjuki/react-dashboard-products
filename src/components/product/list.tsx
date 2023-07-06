import { BiBriefcaseAlt2, BiChip, BiMoney, BiTimer } from "react-icons/bi"
import ProductDetailComponent from "./lib/ProductDetail"
import OfferedByDetails from "./lib/OfferedByDetails"


const a = ["tag1", "tag1", "tag1", "tag1", "tag1", "tag1", "tag1"]
const b = ["tag2", "tag2", "tag2", "tag2", "tag2"]
const c = ["tag2", "tag3", "tag3"]
const d = ["tag4", "tag4"]

const address = { // URL encode this
  "country": {
      "name": "Germany"
  },
  "city": {
      "name": "Aachen"
  },
  "street": "Jülicher+Straße",
  "house": "72a",
  "zipCode": "52070",
  "longitude": "6.100367",
  "latitude": "50.779729"
}

const ProductListComponent = () => {
  return(
    <div className="grid grid-rows-[min-content] md:grid-cols-[2fr_1fr]">
      <div className="md:border-r-4">
        {/* image */}
        <div className={`
        bg-cover
        bg-[url('sad_girl_night_drive.gif')]
        h-96
        border-b-4
        `}></div>

        {/* product title */}
        <div className={`
        flex
        justify-between
        border-b-4
        md:sticky
        md:top-14
        h-14
        items-center
        `}>
          <span className="p-4 text-xl font-bold">Product Title</span>
          <span className="border-l-4 p-4">Type</span>
        </div>

        {/* description */}
        <div className={`
        border-b-4
        `}>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos impedit laborum. Odit modi repudiandae consequatur qui illum adipisci quidem minima, eos iure! Fuga a aut accusantium consequatur repellat commodi?</p>
        </div>

        {/* offered by */}
        <div className={`
        md:hidden
        `}>
          <OfferedByDetails />
        </div>

        {/* details */}
        <div className={`
        border-b-4
        p-4
        `}>
          <h4 className="font-bold pb-4">Details</h4>
          <ProductDetailComponent title='Technologies' icon={<BiChip />} tags={a} />
          <ProductDetailComponent title='Business Models' icon={<BiBriefcaseAlt2 />} tags={b} />
          <ProductDetailComponent title='TRL' icon={<BiTimer />} tags={c} />
          <ProductDetailComponent title='Cost' icon={<BiMoney />} tags={d} />
        </div>

        {/* video */}
        <div className={`
        border-b-4
        pt-4
        `}>
          <h4 className="font-bold pb-4 pl-4">Video</h4>
          {/* @ts-ignore:next-line */}
          <iframe className="w-full" height="315" src="https://www.youtube-nocookie.com/embed/MSq_DCRxOxw?controls=0" title="Offer Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        {/* map */}
        <div className={`
        border-b-4
        py-4
        `}>
          <h4 className="font-bold pb-4 pl-4">Map</h4>
          <iframe
            className="w-full"
            height="315"
            frameBorder="0" 
            // style="border:0"
            referrerPolicy="no-referrer-when-downgrade"
            // src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&center=${address.latitude},${address.longitude}&q=${address.country.name},${address.city.name},${address.street},52070,72a`}
            allowFullScreen
            >
          </iframe>
        </div>
      </div>

      {/* offered by */}
      <div>
        <div className={`
        hidden
        md:block
        md:sticky
        md:top-14
        `}>
          <OfferedByDetails />
        </div>
      </div>
    </div>
  )
}

export default ProductListComponent;
