import { IconContext } from "react-icons";
import { BiLocationPlus } from "react-icons/bi";
import MapComponent from "../../common/Map";

const OfferedByDetails = ({ user, company }: { user: IUser | undefined, company: ICompany | undefined }) => {
  return (
      user && company && (
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
            bg-[--secondary-color]
            `}>
              <img src={company.logo || '/vite.svg'} />
            </div>
    
            {/* user card */}
            <div className={`
            p-4
            h-28
            grid
            grid-cols-[1fr_2fr]
            md:border-b-4
            `}>
              <div 
              style={{backgroundImage: `url(${user.profilePicture})`}}
              className={`
              bg-center
              bg-cover
              `}></div>
              <div className="flex flex-col self-center pl-4">
                <span className="font-bold text-sm">{user.firstName} {user.lastName}</span>
                <span className="self-start opacity-50 text-xs">{company.name}</span>
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
                <span className="font-bold text-sm">{company.address.street} {company.address.house}</span>
                <span className="self-start opacity-50 text-xs">{company.address.zipCode} {company.address.city.name}. {company.address.country.name}</span>
              </div>
            </div>
          </div>
    
          {/* map */}
          <div className={`
          border-b-4
          p-4
          `}>
            <MapComponent className="w-full" height="150" address={company.address} />
          </div>
        </div>

      )
  );
}

export default OfferedByDetails;
