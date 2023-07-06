import { IconContext } from "react-icons";
import { BiLocationPlus } from "react-icons/bi";

const OfferedByDetails = () => {
  return (
    <div className="flex flex-col">
    {/* TODO: component, will also put it in 'main' in mobile view */}
      {/* TODO: the border+padding can be an @style */}
      {/* title */}
      <div className={`
      md:border-b-4
      p-4
      h-14
      flex
      items-center
      `}>
        <span className="md:text-xl font-bold">Offered By</span>
      </div>

      {/* company/user info */}
      <div className="grid grid-cols-2 md:grid-cols-1 items-center">
        {/* company logo */}
        <div className={`
        p-4
        `}>
          <img src="innoloft_logo.png"/>
        </div>

        {/* user card */}
        <div className={`
        p-4
        h-28
        grid
        grid-cols-[1fr_2fr]
        md:border-b-4
        `}>
          <div className={`
          bg-cover
          bg-[url('user_8d48197d.png')]
          `}></div>
          <div className="flex flex-col self-center pl-4">
            <span className="font-bold text-sm">Justin Boreman</span>
            <span className="self-start opacity-50 text-xs">Innoloft Soft Croft</span>
          </div>
        </div>
      </div>

      {/* map location with icon */}
      <div className={`
      p-4
      `}>
        <div className="flex">
          <IconContext.Provider value={{ className: "w-6 h-6" }}>
            <div className="self-center">
              <BiLocationPlus />
            </div>
          </IconContext.Provider>
          <div className="flex flex-col pl-4">
            <span className="font-bold text-sm">Jülicher Straße 72a</span>
            <span className="self-start opacity-50 text-xs">52070 Aachen, Germany</span>
          </div>
        </div>
      </div>

      {/* map */}
      <div className={`
      border-b-4
      p-4
      `}>
        <iframe
          className="w-full"
          height="150"
          frameBorder="0" 
          // style="border:0"
          referrerPolicy="no-referrer-when-downgrade"
          // src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&center=${address.latitude},${address.longitude}&q=${address.country.name},${address.city.name},${address.street},52070,72a`}
          allowFullScreen
          >
        </iframe>
      </div>
    </div>
  );
}

export default OfferedByDetails;
