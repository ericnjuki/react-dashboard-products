import { BiBriefcaseAlt2, BiChip, BiMoney, BiTimer } from "react-icons/bi"
import ProductDetailComponent from "./lib/ProductDetail"
import OfferedByDetails from "./lib/OfferedByDetails"
import ButtonComponent from "../common/Button"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { ReactElement } from "react"
import MapComponent from "./lib/Map"


type IProductViewProps = IAppState & { [key:string]: any }

const ProductViewComponent = ({ 
  // product
 }: IProductViewProps) => {
  const product: IProduct = {
    "id": 6781,
    "name": "LoftOS",
    "description": "<img style=\"height: 0px\" src=a onerror=console.log(\"secret-cookie-value\")>Innoloft <b>creates</b> <script type=\"text/javascript\">console.log(\"test\");</script>the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors.\n\nOur unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world.\nCompanies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition.\n",
    "picture": "https://img.innoloft.com/products/product_783016a3.png",
    "type": {
        "id": 2,
        "name": "Software"
    },
    "categories": [
        {
            "id": 5101,
            "name": "IT platforms"
        },
        {
            "id": 5100,
            "name": "B2B marketplaces"
        }
    ],
    "implementationEffortText": null,
    "investmentEffort": "< 25.000€",
    "trl": {
        "id": 9,
        "name": "TRL 9 – Actual system proven in operational environment (established product available)"
    },
    "video": "https://youtu.be/qjkYA95SL40?t=60",
    "user": {
        "id": 284,
        "email": "example@innoloft.com",
        "firstName": "Christopher",
        "lastName": "Stirner",
        "sex": 1,
        "profilePicture": "https://img.innoloft.com/users/user_8d48197d.png",
        "position": "Chief Strategy Officer"
    },
    "company": {
        "name": "Innoloft GmbH",
        "logo": "https://img.innoloft.com/logos/unt_7838d306.png",
        "address": {
            "country": {
                "name": "Germany"
            },
            "city": {
                "name": "Aachen"
            },
            "street": "Jülicher Straße",
            "house": "72a",
            "zipCode": "52070",
            "longitude": "6.100367",
            "latitude": "50.779729"
        }
    },
    "businessModels": [
        {
            "id": 65,
            "name": "Pay-Per-Use"
        },
        {
            "id": 1155,
            "name": "Subscription"
        },
        {
            "id": 374,
            "name": "White-Label"
        },
        {
            "id": 66,
            "name": "Peer-to-Peer (P2P)"
        }
    ]
  }

  const getProductDetails = (product: IProduct): {title: string, icon: ReactElement, tags: any[]}[] | [] => {
    if (product) {
      const categories: string[] = product.categories.map((cat) => cat.name);
      const cost = product?.investmentEffort;
      const businessModels = product?.businessModels.map((bm) => bm.name);
      const trl = product?.trl.name;
      return [
        { title: "Technologies", icon: <BiChip />, tags: categories}, 
        { title: "Business Models", icon: <BiBriefcaseAlt2 />, tags: businessModels},
        { title: "TRL", icon: <BiTimer />, tags: [trl]},
        { title: "Cost", icon: <BiMoney />, tags: [cost]}
      ];
    } else return [];
  }

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

  return(
    <>
    {/* <ModalComponent /> */}
    <div className="grid grid-rows-[min-content] md:grid-cols-[2fr_1fr]">
      <div className="md:border-r-4">
        {/* image */}
        <div 
        style={{backgroundImage: `url(${product.picture})`}}
        className={`
        bg-cover
        h-96
        border-b-4
        `}></div>

        {/* product title */}
        <div className={`
        grid
        grid-cols-[1fr_auto_auto]
        content-center
        border-b-4
        sticky
        top-14
        h-14
        bg-[--primary-color]
        `}>
          <span className="p-4 text-sm sm:text-xl font-bold">{product?.name}</span>
          <Link to={"/product/1/edit"} className="h-full w-full justify-self-center self-center" >
            <ButtonComponent className="border-4 border-r-0 text-sm sm:text-base px-4 inverted font-bold">Edit</ButtonComponent>
          </Link>
          <span className="text-sm sm:text-base border-l-4 p-4">{product?.type.name}</span>
        </div>

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
              console.log('ABABA', text)
            }} 
          /> */}
        </div>

        {/* TODO: remove map in mobile view */}
        {/* offered by */}
        <div className={`
        md:hidden
        `}>
          <OfferedByDetails user={product?.user} company={product?.company} />
        </div>

        {/* details */}
        <div className={`
        border-b-4
        p-4
        `}>
          <h4 className="font-bold pb-4">Details</h4>
          {getProductDetails(product).map((detail) => (
              <ProductDetailComponent 
                title={detail.title}
                icon={detail.icon} 
                tags={detail.tags} />
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
        `}>
          <h4 className="font-bold pb-4 pl-4">Map</h4>
          <MapComponent className="w-full" height="315" address={product.company.address} />  
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
          <OfferedByDetails user={product?.user} company={product?.company} />
        </div>
      </div>
    </div>
    </>
  )
}

const mapStateToProps = (state: { app: IAppState }) => {
  const { app: { product } } = state;
  return {
    product,
  }
}
export default connect(mapStateToProps, null)(ProductViewComponent);
