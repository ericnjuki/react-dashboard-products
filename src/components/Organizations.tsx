import { connect, useDispatch } from "react-redux";
import ButtonComponent from "./common/Button";
import axios from "axios";
import { API } from "../constants/api";
import { getConfigSuccess } from "../actions/AppActions";
const APP_ID = import.meta.env.VITE_APP_ID || 1;


const OrganizationsComponent = () => {
  const organizations = [{ id: 1, name: 'Innoloft'}, { id: 2, name: 'NRW'}];
  const dispatch = useDispatch();

  const changeTheme = (id: number) => {
    if (id === -1) {
      // reset config
      dispatch(getConfigSuccess({
        id: -1,
        logo: '/vite.svg',
        mainColor: '#242424',
        hasUserSection: false
      }));
    } else {
      axios
      .get(`${API.getConfig}/${id}/`)
      .then((result) => {
        console.log('SUCCESS', result.data)
        dispatch(getConfigSuccess(result.data));
        // navigate('/');
      })
      .catch(e => console.log('UH OH', e));
    }
  }
  return (
    <ul className="h-[calc(100svh-7em)]">
      <li key={-2} className="p-4 border-b-4 h-14 hover:bg-[--secondary-color] hover:text-[--primary-color]">
        <ButtonComponent onClick={() => { changeTheme(APP_ID) }}>
          Apply from Config {`{${APP_ID}}`}
        </ButtonComponent>
      </li>
      {organizations.map((org) => (
        <li key={org.id} className="p-4 border-b-4 h-14 hover:bg-[--secondary-color] hover:text-[--primary-color]">
          <ButtonComponent onClick={() => { changeTheme(org.id) }}>
            {org.name}
          </ButtonComponent>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ app }: { app: IAppState }) => {
  const { config } = app;
  return { config }
}
export default connect(mapStateToProps, null)(OrganizationsComponent);
