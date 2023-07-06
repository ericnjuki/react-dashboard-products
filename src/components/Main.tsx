import { bindActionCreators, Dispatch } from "redux";
import { connect } from 'react-redux';
import { getVal } from "../redux-actions/AppActions";
import { useEffect } from "react";
import ButtonComponent from "./common/Button";
import { IconContext } from "react-icons";
import { BiBriefcaseAlt2, BiChip, BiMoney, BiTimer } from "react-icons/bi";

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

const MainComponent = ({ val, getValAction }: { val: any, getValAction: any, [key:string]: any}) => {
  useEffect(() => {
    getValAction();
  }, []);
  return (
    <>
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
      md:top-[56px]
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

      {/* details */}
      <div className={`
      border-b-4
      p-4
      `}>
        <h4 className="font-bold pb-4">Details</h4>
        <div>
          <div className="flex mt-4">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiChip />
              </div>
            </IconContext.Provider>
            <span className="pl-4">Technologies</span>
          </div>
          <ul className="pt-4 flex flex-wrap">
            {a.map((item, i) => {
              return <li className={`
              border-2
              px-4
              py-1
              text-xs
              font-semibold
              inline
              mr-2
              mb-2
              `}
              key={`${i}${item}`}
              ><span>{item}</span></li>
            })}
          </ul>
        </div>
        <div>
          <div className="flex mt-4">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiBriefcaseAlt2 />
              </div>
            </IconContext.Provider>
            <span className="pl-4">Business Models</span>
          </div>
          <ul className="pt-4 flex flex-wrap">
            {b.map((item, i) => {
              return <li className={`
              border-2
              px-4
              py-1
              text-xs
              font-semibold
              inline
              mr-2
              mb-2
              `}
              key={`${i}${item}`}
              ><span>{item}</span></li>
            })}
          </ul>
        </div>
        <div>
          <div className="flex mt-4">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiTimer />
              </div>
            </IconContext.Provider>
            <span className="pl-4">TRL</span>
          </div>
          <ul className="pt-4 flex flex-wrap">
            {c.map((item, i) => {
              return <li 
                className={`
                border-2
                px-4
                py-1
                text-xs
                font-semibold
                inline
                mr-2
                mb-2
              `}
              key={`${i}${item}`}
              ><span>{item}</span></li>
            })}
          </ul>
        </div>
        <div>
          <div className="flex mt-4">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiMoney />
              </div>
            </IconContext.Provider>
            <span className="pl-4">Cost</span>
          </div>
          <ul className="pt-4 flex flex-wrap">
            {d.map((item, i) => {
              return <li className={`
              border-2
              px-4
              py-1
              text-xs
              font-semibold
              inline
              mr-2
              mb-2
              `}
              key={`${i}${item}`}
              ><span>{item}</span></li>
            })}
          </ul>
        </div>
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
    </>
  );
}

const mapStateToProps = (state: any) => {
  const { app: { val } } = state;
  return {
      val
  };
};


const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
      getValAction: getVal,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
