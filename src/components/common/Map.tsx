const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

type MapProps = {
  className: string;
  height: string;
  address: IAddress;
};
const MapComponent = ({ className, height, address }: MapProps) => {
  return (
    <iframe
      className={className}
      height={height}
      referrerPolicy='no-referrer-when-downgrade'
      src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&center=${address.latitude},${address.longitude}&q=${address.country.name},${address.city.name},${address.street},${address.zipCode},${address.house}`}
      allowFullScreen
    ></iframe>
  );
};
export default MapComponent;
