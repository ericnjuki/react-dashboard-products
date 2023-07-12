import { BiEdit } from "react-icons/bi"
import ProductDetailComponent from "./lib/ProductDetail"
import OfferedByDetails from "./lib/OfferedByDetails"
import DraftEditor from "./lib/DraftEditor"
import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import ProductImageComponent from "./lib/ProductImage"
import ProductTitleComponent from "./lib/ProductTitle"
import ProductInputFieldComponent from "./lib/ProductInputField"
import { getProductDetails } from "./lib/utils"
import TagType from "../../constants/tagTypes"
import axios from "axios"
import { API } from "../../constants/api"
import { connect, useDispatch } from "react-redux"
import { getProductByIdSuccess, getTRLSuccess, putProductByIdSuccess } from "../../actions/AppActions"
import ModalComponent from "../common/Modal"
import ButtonComponent from "../common/Button"
import { useNavigate } from "react-router-dom"

type EditableProductFields = {
  picture: string
  name?: string,
  video?: string,
  categories?: Array<{ id: number, name: string }>,
  businessModels?: Array<{ id: number, name: string }>,
  trl?: { id: number, name: string },
  investmentEffort?: string,
  description: string,
} | {};

type IProductEditProps = IAppState & { [key:string]: any }

const ProductEditComponent = ({ product, trl: TRLData, config }: IProductEditProps) => {
  const id = 6781;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productIn, setProductIn] = useState<IProduct>();
  const [description, setDescription] = useState<string>();
  const [newProductImage, setNewProductImage] = useState<any>('');
  const [editedFields, setEditedFields] = useState<EditableProductFields>({});
  const [toggleTRLModal, setToggleTRLModal] = useState(false);

  // TODO: dedupe
  useEffect(() => {
    if (!product) {
      axios
      .get(`${API.getProduct}/${id}/`)
      .then((result) => {
        console.log('SUCCESS', result.data)
        dispatch(getProductByIdSuccess(result.data));
      })
      .catch(e => console.log('UH OH', e));
    } else {
      const productCopy = { ...product };
      setProductIn(productCopy);
      setDescription(product.description)
    }
  }, [product]);

  useEffect(() => {
    if (!TRLData || TRLData?.length === 0) {
      axios
      .get(`${API.getTRL}/`)
      .then((result) => {
        console.log('SUCCESS', result.data)
        dispatch(getTRLSuccess(result.data));
      })
      .catch(e => console.log('UH OH', e));
    }
  }, [TRLData]);

  const handleUploadProductImage = (e: React.SyntheticEvent<HTMLInputElement>, key: string) => {
    const target = e.target as HTMLInputElement;
    const formData = new FormData();
    if (target.files) {
      formData.append("file", target.files[0]);
      formData.append("key", key);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setNewProductImage(e.target?.result);
        const editedFieldsCopy = { ...editedFields };
        editedFieldsCopy.picture = `${(e.target?.result as string).substring(0, 50)}...`;
        setEditedFields(editedFieldsCopy);
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

  const handleChangeTextFields = (field: { name: string, value: string }) => {
    const editedFieldsCopy = { ...editedFields };
    switch(field.name) {
      case 'description':
        if (field.value !== description) {
          editedFieldsCopy.description = field.value;
          setEditedFields(editedFieldsCopy);
        }
        break;
      case 'name':
        editedFieldsCopy.name = field.value;
        setEditedFields(editedFieldsCopy);
        break;
      case 'video':
        editedFieldsCopy.video = field.value;
        setEditedFields(editedFieldsCopy);
        break;
      default:
        break;
    }
  }

  const handleChangeTRL = (trl: { id: string, name: string, description: string | null }) => {
    handleChangeTags(TagType.TRL.title, trl.name);
    setToggleTRLModal(false);
  }

  const onSave = () => {
    console.log('Edited: ', editedFields);
    console.log('Call: ', `${API.putProduct}/${id}/`);
    axios
    .put(`${API.putProduct}/${id}/`, editedFields)
    .then((result) => {
      console.log('SUCCESS', result.data)
      dispatch(putProductByIdSuccess(result.data));
      navigate(`/product`);
    })
    .catch(e => console.log('UH OH', e));
  }

  // useEffect(() => {
  //   console.log('Edited: ', editedFields);
  // }, [editedFields]);

  return (
    productIn && (
      <>
        <ModalComponent  isActive={toggleTRLModal} dismiss={() => setToggleTRLModal(false)} title="Select TRL" >
          <ul>
            {TRLData?.map(( trl ) => (
              <li key={trl.id} className="h-14 border-b-2 hover:bg-[--secondary-color] hover:text-[--primary-color]">
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
            <div className="relative bg-[--secondary-color]">
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
            <ProductTitleComponent 
              productTitle={productIn.name}
              productType={productIn.type.name} 
              config="Save"
              onSave={onSave}
            />

            {/* edit title */}
            {/* TODO: rm magic strings */}
            {/* TODO: dont change editedFields on input changes
            save in local state and update editedFields on SAVE */}
            <ProductInputFieldComponent 
              label="Name:"
              className="mt-4" 
              value={productIn.name} 
              onChange={(val) => { 
                handleChangeTextFields({
                  name: 'name',
                  value: val
                }) 
              }} 
            />

            {/* video url */}
            <ProductInputFieldComponent 
              label="Video URL:" 
              value={productIn.video} 
              onChange={(val) => { 
                handleChangeTextFields({
                  name: 'video',
                  value: val
                }) 
              }} 
            />

            {/* description */}
            <div className={`
            `}>
              <p className="pl-4 py-4 min-w-[8em]">Description:</p>
              {/* TODO: draftEditor, change value to defaultValue */}
              <DraftEditor 
                value={productIn.description}
                onChange={(val) => { 
                  handleChangeTextFields({ 
                    name: 'description', 
                    value: val 
                  }) 
                }}
              />
            </div>

            {/* details */}
            <div className="">
              <h4 className="font-bold p-4 pb-0">Details</h4>
              {TRLData && getProductDetails(productIn).map((detail, i) => (
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
          <div className={!config?.hasUserSection ? 'hidden': `
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

const mapStateToProps = (state: { app: IAppState }) => {
  const { app: { product, trl, config } } = state;
  return {
    product,
    config,
    trl,
  }
}
export default connect(mapStateToProps, null)(ProductEditComponent);
