import HeaderComponent from './components/common/Header';
import SideBarNavComponent from './components/common/SideBarNav';
import { Outlet } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from './constants/api';
import { getConfigSuccess } from './actions/AppActions';
const APP_ID = import.meta.env.VITE_APP_ID || 1;

const App = (props: { [key: string]: any }) => {
  const config = props.config as IConfig;
  const dispatch = useDispatch();
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (config) {
      const primaryColorStyle = {
        '--primary-color': config.mainColor,
      } as React.CSSProperties;
      setStyle(primaryColorStyle);
    } else {
      axios
        .get(`${API.getConfig}/${APP_ID}/`)
        .then((result) => {
          console.log('SUCCESS', result.data);
          dispatch(getConfigSuccess(result.data));
        })
        .catch((e) => console.log('UH OH', e));
    }
  }, [config]);

  return (
    <div className='max-w-[1280px] h-[100svh] m-auto'>
      <HeaderComponent />
      <div
        style={style}
        className={`
        grid
        grid-cols-[1fr]
        lg:grid-cols-[1fr_3fr]
        mt-14
        border-x-4
        border-b-4
        bg-[--primary-color]
        `}
      >
        <div className='translate-x-[-100%] lg:translate-x-0 border-r-4'>
          <div className='absolute lg:sticky lg:top-[56px]'>
            <SideBarNavComponent />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

const mapStateToProps = ({ app }: { app: IAppState }) => {
  const { config } = app;
  return { config };
};
export default connect(mapStateToProps, null)(App);
