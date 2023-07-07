import { Link } from "react-router-dom";
import ButtonComponent from "../common/Button";

const ProductListComponent = () => {
  return (
      <ul className="grid md:grid-cols-2">
        {/* TODO: add border logic and factor in last element(s) */}
        <li className="grid p-4 border-b-4">
          <div className={`
          bg-cover
          bg-[url('/sad_girl_night_drive.gif')]
          h-80
          w-full
          `}></div>
          <span className="mt-4 text-xl font-bold">
            <Link to={"/"}>Product Title</Link>
          </span>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam similique, tenetur corporis magnam aspernatur laborum eius alias itaque nam vero minima doloribus libero velit voluptas, adipisci recusandae iste sint.</p>
            {/* TODO: link. check all links href */}
            <Link to={"/product/1"}>
              <ButtonComponent className="p-4 border-4">
              View Product
              </ButtonComponent>
            </Link>
        </li>
        <li className="grid p-4 border-b-4 border-l-4">
          <div className={`
          bg-cover
          bg-[url('/sad_girl_night_drive.gif')]
          h-80
          w-full
          `}></div>
          <span className="mt-4 text-xl font-bold">
            <Link to={"/"}>Product Title</Link>
          </span>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam similique, tenetur corporis magnam aspernatur laborum eius alias itaque nam vero minima doloribus libero velit voluptas, adipisci recusandae iste sint.</p>
            {/* TODO: link. check all links href */}
            <Link to={"/product/1"}>
              <ButtonComponent className="p-4 border-4">
              View Product
              </ButtonComponent>
            </Link>
        </li>
        <li className="grid p-4 border-b-4">
          <div className={`
          bg-cover
          bg-[url('/sad_girl_night_drive.gif')]
          h-80
          w-full
          `}></div>
          <span className="mt-4 text-xl font-bold">
            <Link to={"/"}>Product Title</Link>
          </span>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam similique, tenetur corporis magnam aspernatur laborum eius alias itaque nam vero minima doloribus libero velit voluptas, adipisci recusandae iste sint.</p>
            {/* TODO: link. check all links href */}
            <Link to={"/product/1"}>
              <ButtonComponent className="p-4 border-4">
              View Product
              </ButtonComponent>
            </Link>
        </li>
      </ul>
  );
}

export default ProductListComponent;
