import { Link } from 'react-router-dom';
import ButtonComponent from '../common/Button';
import { Dispatch, bindActionCreators } from 'redux';
import { getProducts, getProductsSuccess } from '../../actions/AppActions';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { API } from '../../constants/api';

type IProductListProps = IAppState & { [key: string]: unknown };

const ProductListComponent = ({
  // getProductsAction,
  allProducts,
}: IProductListProps) => {
  const dispatch = useDispatch();

  // TODO: must dedupe
  useEffect(() => {
    if (allProducts?.length === 0) {
      axios
        .get(`${API.getProduct}/${6781}/`)
        .then((result) => {
          // console.log('SUCCESS', result.data);
          dispatch(getProductsSuccess([result.data]));
        })
        .catch((e) => console.log('UH OH', e));
    }
  }, [allProducts, dispatch]);

  useEffect(() => {
    // TODO: DOESN'T WORK (cors)
    // getProductsAction();
  }, []);

  return (
    <ul className='grid md:grid-cols-2'>
      {/* TODO: add border logic and factor in last element(s) */}
      {allProducts?.map((prod) => (
        <li
          key={prod?.id}
          className='grid p-4 border-b-4'
        >
          <div
            style={{ backgroundImage: `url(${prod?.picture})` }}
            className={`
          bg-cover
          h-80
          w-full
          `}
          ></div>
          <span className='mt-8 text-xl font-bold'>
            <Link to={`/product`}>{prod?.name}</Link>
          </span>
          {/* <p className="mb-4">{prod?.description}</p> */}
          <Link
            className='mt-4'
            to={`/product`}
          >
            <ButtonComponent className='p-4 border-4'>
              View Product
            </ButtonComponent>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: { app: IAppState }) => {
  const {
    app: { allProducts },
  } = state;
  return { allProducts };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getProductsAction: getProducts,
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListComponent);
