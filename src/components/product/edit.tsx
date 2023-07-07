import { BiBriefcaseAlt2, BiChip, BiEdit, BiMoney, BiTimer } from "react-icons/bi"
import ProductDetailComponent from "./lib/ProductDetail"
import OfferedByDetails from "./lib/OfferedByDetails"
import DraftEditor from "./editor"
import { useEffect, useState } from "react"
import ButtonComponent from "../common/Button"
import { IconContext } from "react-icons"



let a = ["tag1", "tag1", "tag1", "tag1", "tag1", "tag1", "tag1"]
const b = ["tag2", "tag2", "tag2", "tag2", "tag2"]
const c = ["tag2", "tag3", "tag3"]
const d = ["tag4", "tag4"]

const address = { // URL encode this
  "country": {
      "name": "Germany"
  },
  "city": {
      "name": "Aachen"
  },
  "street": "Jülicher+Straße",
  "house": "72a",
  "zipCode": "52070",
  "longitude": "6.100367",
  "latitude": "50.779729"
}
const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis delectus facere quaerat omnis nobis quisquam, ipsam dolores esse recusandae iste explicabo ex temporibus inventore dolorem! Omnis enim ipsa sed?";

const ProductEditComponent = () => {

  const [description, setDescription] = useState<string>(desc);
  const [newProductImage, setNewProductImage] = useState<any>('');

  const addTagToProductDetail = (value: string, array: string[]) => {
    // modify the tags
  }

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

  return (
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
            <div className={`
            bg-cover
            bg-[url('/sad_girl_night_drive.gif')]
            h-96
            border-b-4
            `}></div>
          }
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
        <div className={`
        grid
        grid-cols-[1fr_auto]
        content-center
        border-b-4
        sticky
        top-14
        h-14
        bg-[--primary-color]
        `}>
          <span className="p-4 text-xl font-bold">Product Name</span>
          <span className="border-l-4 p-4">Type</span>
        </div>

        {/* TODO: input field can be component */}
        {/* edit title */}
        <div className={`
        flex
        h-14
        mt-4
        `}>
          <span className="pl-4 py-4 min-w-[8em]">Name:</span>
          <div className="h-full w-full p-3">
            <input type="text" className="p-1 h-full w-full focus-visible:outline-none" />
          </div>
        </div>

        {/* video url */}
        <div className={`
        flex
        h-14
        `}>
          <span className="pl-4 py-4 min-w-[8em]">Video URL:</span>
          <div className="h-full w-full p-3">
            <input type="text" className="p-1 h-full w-full focus-visible:outline-none" />
          </div>
        </div>

        {/* description */}
        <div className={`
        `}>
          <p className="pl-4 py-4 min-w-[8em]">Description:</p>
          <DraftEditor 
            value={description}
            onChange={(val) => setDescription(val)}
          />
        </div>

        {/* details */}
        <div className={`
        border-b-4
        p-4
        `}>
          <h4 className="font-bold pb-4">Details</h4>
          <ProductDetailComponent title='Technologies' icon={<BiChip />} tags={a} isEditable onChange={(val: string) => {addTagToProductDetail(val, [...a])}} />
          <ProductDetailComponent title='Business Models' icon={<BiBriefcaseAlt2 />} tags={b} />
          <ProductDetailComponent title='TRL' icon={<BiTimer />} tags={c} />
          <ProductDetailComponent title='Cost' icon={<BiMoney />} tags={d} />
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
          <OfferedByDetails />
        </div>
      </div>
    </div>
  )
}

export default ProductEditComponent;
