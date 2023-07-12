import ProductDetailComponent from "./lib/ProductDetail"
import OfferedByDetails from "./lib/OfferedByDetails"
import { connect, useDispatch } from "react-redux"
import MapComponent from "../common/Map"
import ProductImageComponent from "./lib/ProductImage"
import ProductTitleComponent from "./lib/ProductTitle"
import { getProductDetails } from "./lib/utils"
import { useEffect } from "react"
import { getProductByIdSuccess } from "../../actions/AppActions"
import axios from "axios"
import { API } from "../../constants/api"


type IProductViewProps = IAppState & { [key:string]: any }

const ProductViewComponent = ({ product, config }: IProductViewProps) => {
  const id = 6781;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!product) {
      axios
      .get(`${API.getProduct}/${id}/`)
      .then((result) => {
        // console.log('SUCCESS', result.data)
        dispatch(getProductByIdSuccess(result.data));
      })
      .catch(e => console.log('UH OH', e));
    }
  }, [product]);

  const formatVideoURLForEmbed = (url: string): string => {
    let videoId = null;
    if (url.indexOf('?v=') !== -1 && url.indexOf('&') !== -1) {
      // full url, with query
      videoId = url.slice(url.indexOf('?v=') + 3, url.indexOf('&'))

    } else if (url.indexOf('?v=') !== -1) {
      // full url, no query
      videoId = url.slice(url.indexOf('?v=') + 3)
      
    } else if (url.includes('youtu.be') && url.indexOf('?') !== -1) {
      // mini url, with query
      videoId = url.slice(url.indexOf('.be/') + 4, url.indexOf('?'));

    } else if (url.includes('youtu.be')) {
      // mini url, no query
      videoId = url.slice(url.indexOf('.be/') + 4);
    }
    const embedVideoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?controls=0`
    return embedVideoUrl;
  }

  return (
    product && 
    <div className="grid grid-rows-[min-content] md:grid-cols-[2fr_1fr]">
      <div className="md:border-r-4">
        {/* image */}
        <div className="p-2">
          <ProductImageComponent imageUrl={product?.picture} />
        </div>

        {/* product title */}
        <ProductTitleComponent 
          productTitle={product?.name} 
          productType={product?.type?.name} 
          config="Edit"
        />

        {/* description */}
        <div className={`
        border-b-4
        `}>
          <p className="p-4" dangerouslySetInnerHTML={{ __html: product.description }}></p>
          {/* <ReactQuill 
            value={product?.description}
            onChange={(content, delta, source, editor) => {
              const text = editor.getText(content);
              setVal(text);
            }} 
          /> */}
        </div>

        {/* TODO: remove map in mobile view */}
        {/* offered by */}
        <div className={`
        ${!config?.hasUserSection ? 'hidden': 'md:hidden'}
        `}>
          <OfferedByDetails user={product?.user} company={product?.company} />
        </div>

        {/* details */}
        <div className={`
        border-b-4
        
        `}>
          <h4 className="font-bold p-4 pb-0">Details</h4>
          {getProductDetails(product).map((detail) => (
              <ProductDetailComponent 
                key={detail.title}
                title={detail.title}
                icon={detail.icon} 
                tags={detail.tags} 
                isEditable={false}  
              />
          ))}
        </div>

        {/* video */}
        {product.video && (
            <div className={`
            border-b-4
            pt-4
            `}>
              <h4 className="font-bold pb-4 pl-4">Video</h4>
              {/* @ts-ignore:next-line */}
              <iframe 
                className="w-full"
                height="315" 
                src={formatVideoURLForEmbed(product.video)} 
                title="Offer Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
        )}


        {/* map */}
        <div className={`
        border-b-4
        py-4
        ${config?.hasUserSection && 'md:hidden'}
        `}>
          <h4 className="font-bold pb-4 pl-4">Map</h4>
          <MapComponent className="w-full" height="315" address={product?.company?.address} />  
        </div>
      </div>

      {/* offered by */}
      <div>
        <div className={!config?.hasUserSection ? 'hidden': `
        hidden
        md:block
        md:sticky
        md:top-14
        `}>
          <OfferedByDetails user={product?.user} company={product?.company} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: { app: IAppState }) => {
  const { app: { product, config } } = state;
  return {
    product, config
  }
}
export default connect(mapStateToProps, null)(ProductViewComponent);
