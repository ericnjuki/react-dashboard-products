import { BiEdit } from "react-icons/bi"
import ProductDetailComponent from "./lib/ProductDetail"
import OfferedByDetails from "./lib/OfferedByDetails"
import DraftEditor from "./editor"
import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import ProductImageComponent from "./ProductImage"
import ProductTitleComponent from "./ProductTitle"
import ProductInputFieldComponent from "./ProductInputField"
import { getProductDetails } from "./lib/utils"
import TagType from "../../constants/tagTypes"
import axios from "axios"
import { API } from "../../constants/api"
import { useDispatch } from "react-redux"
import { getTRLSuccess } from "../../redux-actions/AppActions"
import ModalComponent from "../common/Modal"
import ButtonComponent from "../common/Button"

type EditableProductFields = {
  picture: string
  name?: string,
  video?: string,
  categories?: Array<{ id: number, name: string }>,
  businessModels?: Array<{ id: number, name: string }>,
  trl?: { id: number, name: string },
  investmentEffort?: string,
} | {};

const ProductEditComponent = ({
  // product
}) => {
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

  const TRLData = [
    {
        "id": "1",
        "name": "TRL 1 – Basic principles observed (product idea available)",
        "description": null
    },
    {
        "id": "2",
        "name": "TRL 2 – Technology concept formulated (business plan available)",
        "description": null
    },
    {
        "id": "3",
        "name": "TRL 3 – Experimental proof of concept",
        "description": null
    },
    {
        "id": "4",
        "name": "TRL 4 – Technology validated in lab",
        "description": null
    },
    {
        "id": "5",
        "name": "TRL 5 – Technology validated in relevant environment (prototype available)",
        "description": null
    },
    {
        "id": "6",
        "name": "TRL 6 – Technology demonstrated in relevant environment",
        "description": null
    },
    {
        "id": "7",
        "name": "TRL 7 – System prototype demonstration in operational environment (pilot customer available)",
        "description": null
    },
    {
        "id": "8",
        "name": "TRL 8 – System complete and qualified",
        "description": null
    },
    {
        "id": "9",
        "name": "TRL 9 – Actual system proven in operational environment (established product available)",
        "description": null
    }
]

  const dispatch = useDispatch();
  const [productIn, setProductIn] = useState<IProduct>(product);
  const [description, setDescription] = useState<string>(productIn?.description || '');
  const [newProductImage, setNewProductImage] = useState<any>('');
  const [editedFields, setEditedFields] = useState<EditableProductFields>({});
  const [toggleTRLModal, setToggleTRLModal] = useState(false);

  const handleUploadProductImage = (e: React.SyntheticEvent<HTMLInputElement>, key: string) => {
    const target = e.target as HTMLInputElement;
    const formData = new FormData();
    if (target.files) {
      formData.append("file", target.files[0]);
      formData.append("key", key);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        console.log(e.target?.result);
        setNewProductImage(e.target?.result);
      }
      reader.readAsDataURL(target.files[0]);
    }
  }

  // TODO: DRY
  const handleChangeTags = (tagType: string, value: string, isRemove?: boolean) => {
    if (productIn) {
      const productCopy = { ...productIn };
      const editedFieldsCopy = { ...editedFields };
      switch (tagType) {
        case TagType.BUSINESS_MODELS.title:
          const newBusinessModel = { id: -1, name: value };
          if (!isRemove) productCopy.businessModels.push(newBusinessModel)
          else productCopy.businessModels = productCopy.businessModels.filter((b) => b.name !== value);
          setProductIn(productCopy);

          editedFieldsCopy.businessModels = productCopy.businessModels;
          setEditedFields(editedFieldsCopy);
          break;
        case TagType.CATEGORIES.title:
          // push
          const newCategory = { id: -1, name: value };
          if (!isRemove) productCopy.categories.push(newCategory)
          else productCopy.categories = productCopy.categories.filter((c) => c.name !== value);
          setProductIn(productCopy);

          editedFieldsCopy.categories = productCopy.categories;
          setEditedFields(editedFieldsCopy);
          break;
        case TagType.TRL.title:
          // replace
          const newTrl = { id: -1, name: value };
          productCopy.trl = newTrl;
          setProductIn(productCopy);

          editedFieldsCopy.trl = newTrl;
          setEditedFields(editedFieldsCopy);
          break;
        case TagType.INVESTMENT_EFFORT.title:
          // replace
          const newInvestmentEffort = value;
          productCopy.investmentEffort = value;
          setProductIn(productCopy);

          editedFieldsCopy.investmentEffort = newInvestmentEffort;
          setEditedFields(editedFieldsCopy);
          break;
        default:
          break;
      }
    }
  }

  const handlechangeDescription = (value: string) => {
    // TODO: if new value is not equal to value from state
      setDescription(value);
      // add to edited fields
  }

  const handleChangeTRL = (trl: { id: string, name: string, description: string | null }) => {
    handleChangeTags(TagType.TRL.title, trl.name);
    setToggleTRLModal(false);
  }

  const onSave = () => {
    
  }

  useEffect(() => {
    console.log('Edited: ', editedFields);
  }, [editedFields]);

  const doIt = () => {
    axios.get(`${API.getProduct}/${6781}/`)
    .then((result) => {
      console.log('SUCCESS', result.data)
      dispatch(getTRLSuccess(result.data));
    }).catch(e => console.log('UH OH', e));
  }
  useEffect(() => {
    // TODO:DOESN'T WORK (cors) 
    // getProductByIdAction(6781);


  }, []);

  return (
    productIn && (
      <>
        <ModalComponent  isActive={toggleTRLModal} dismiss={() => setToggleTRLModal(false)} title="Select TRL" >
          <ul>
            {TRLData.map(( trl ) => (
              <li className="h-14 border-b-2 hover:bg-[--secondary-color] hover:text-[--primary-color]">
                <ButtonComponent className="px-4 font-bold" onClick={() => handleChangeTRL(trl)}>
                    {trl.name}
                </ButtonComponent>
              </li>
            ))}
          </ul>
        </ModalComponent>
        <div className="grid grid-rows-[min-content] md:grid-cols-[2fr_1fr]">
          <div className="md:border-r-4">
            {/* image */}
            <div className="relative">
              {newProductImage ? 
                <img 
                  src={newProductImage} 
                  className="border-b-4"
                />
              : 
                <ProductImageComponent imageUrl={productIn.picture} />
              }
              {/* upload image button */}
              <div className={`
                absolute
                top-0
                right-0
                border-b-4
                border-l-4
                bg-[--primary-color]
                h-14
              `}>
                <label htmlFor={'uploadImage'} className="block p-4 cursor-pointer">
                  <IconContext.Provider value={{ className: "w-6 h-6" }}>
                    <div>
                      <BiEdit />
                    </div>
                  </IconContext.Provider>
                </label>
                <input
                  className="hidden"
                  accept="image/*"
                  id={'uploadImage'}
                  onChange={(e) => handleUploadProductImage(e, 'img_bucket_key?')}
                  type="file"
                />
              </div>
            </div>

            {/* product title */}
            <ProductTitleComponent productTitle={productIn.name} productType={productIn.type.name} isEditable={false} />

            {/* edit title */}
            <ProductInputFieldComponent label="Name:" className="mt-4" value={productIn.name} onChange={() => {}} />

            {/* video url */}
            <ProductInputFieldComponent label="Video URL:" value={productIn.video} onChange={() => {}} />

            {/* description */}
            <div className={`
            `}>
              <p className="pl-4 py-4 min-w-[8em]">Description:</p>
              {/* TODO: draftEditor, change value to defaultValue */}
              <DraftEditor 
                value={productIn.description}
                onChange={(val) => handlechangeDescription(val)}
              />
            </div>

            {/* details */}
            <div className="">
              <h4 className="font-bold pb-4">Details</h4>
              {getProductDetails(productIn).map((detail, i) => (
                <ProductDetailComponent
                  key={`${i}${detail.tags[0].name}`}
                  isEditable
                  title={detail.title}
                  icon={detail.icon} 
                  tags={detail.tags}
                  trls={detail.title === TagType.TRL.title ? TRLData : []}
                  onChangeTags={(val: string, isRemove: boolean) => { handleChangeTags( detail.title, val, isRemove) }}
                  setToggleTRLModal={setToggleTRLModal}
                />
              ))}
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
              <OfferedByDetails user={productIn.user} company={productIn.company} />
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default ProductEditComponent;
