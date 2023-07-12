import { ReactElement, useState } from "react";
import { IconContext } from "react-icons";
import { BiCaretDown, BiPlus, BiX } from "react-icons/bi";
import ButtonComponent from "../../common/Button";
import TagType from "../../../constants/tagTypes";

type ProductDetailProps = {
  title: string, 
  icon: ReactElement,
  tags: IdName[],
  isEditable: boolean,
  onChangeTags?: (...args:any) => any,
  trls?: Array<{ id: string, name: string, description: string | null}> | [],
  setToggleTRLModal?: any,
}

const NewTagComponent = ({ onEnterNewTag }: { onEnterNewTag: (arg: string) => void }) => {
  const [inputTarget, setInputTarget] = useState<any>();
  const [newTagValue, setNewTagValue] = useState<string>('');

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setNewTagValue(target.value);
    setInputTarget(target);
  }

  const clearTarget = () => {
    if (inputTarget) {
      inputTarget.value = '';
    }
  }
  const handleEnter = (e: React.KeyboardEvent | null) => {
    if (e !== null) {
      const target = e.target as HTMLInputElement;
      if (e.code === 'Enter') {
        onEnterNewTag(target.value);
        e.preventDefault();
        clearTarget();
      }
    } else if (newTagValue) {
      onEnterNewTag(newTagValue);
      clearTarget();
    }
  }
  return (
    <li className={`
    border-[--input-color]
    border-2
    text-xs
    font-semibold
    mr-2
    mb-2
    flex
    items-center
    justify-between
    `}>
      <input 
        // ref={tagField}
        placeholder="add item" 
        type="text" 
        className="p-1 h-full w-auto focus-visible:outline-none bg-[--input-color]"
        // value={value}
        onChange={handleChange}
        onKeyDown={(e) => handleEnter(e)}
      />
      <ButtonComponent onClick={() => {handleEnter(null)}}>
        <IconContext.Provider value={{ className: "w-6 h-6" }}>
          <div>
            <BiPlus />
          </div>
        </IconContext.Provider>
      </ButtonComponent>
    </li>
  )
}

const ProductDetailComponent = ({ title, icon, tags, isEditable, onChangeTags, setToggleTRLModal }: ProductDetailProps) => {

  return (
    <div className="border-b-4 p-4">
      <div className="flex mt-4">
        <IconContext.Provider value={{ className: "w-6 h-6" }}>
          <div>
            {icon}
          </div>
        </IconContext.Provider>
        <span className="pl-4">{title}</span>
      </div>
      <ul className="pt-4 flex flex-wrap">
        {/* TODO: proper customizability with isEditable? */}
        {tags.map((item: IdName, i: number) => {
          return (
            <li 
            key={`${i}${item.id}${item.name}`}
            onClick={title !== TagType.TRL.title ? () =>  {} : () => setToggleTRLModal(true)}
            className={`
            border-2
            text-xs
            font-semibold
            mr-2
            mb-2
            ${!isEditable && 'px-4 py-1'}
            ${isEditable && 'flex items-center justify-between'}
            `}>
              <span className={`${isEditable && 'pl-2 pr-2 py-1'}`}>{item.name}</span>
              {isEditable && title !== TagType.INVESTMENT_EFFORT.title && (
                <span
                  onClick={title !== TagType.TRL.title ? () => onChangeTags!(item.name, true) : () => {}}
                  className="border-l-2 h-full flex items-center bg-[--input-color]"
                >
                  <IconContext.Provider value={{ className: "w-5 h-5" }}>
                    <div>
                      {title === TagType.TRL.title ? <BiCaretDown /> : <BiX />}
                    </div>
                  </IconContext.Provider>
                </span>
              )}
            </li>
          )
        })}
        {isEditable && title !== TagType.TRL.title && <NewTagComponent onEnterNewTag={onChangeTags!} />}
      </ul>
    </div>
  )
}
export default ProductDetailComponent;
