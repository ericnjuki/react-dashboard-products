import { ReactElement } from 'react';
import { BiBriefcaseAlt2, BiChip, BiMoney, BiTimer } from 'react-icons/bi';
import Tag from '../../../constants/tagTypes';

type ProductDetailType = {
  title: string;
  icon: ReactElement;
  tags: IdName[];
};

export const getProductDetails = (
  product: IProduct
): Array<ProductDetailType> => {
  if (product) {
    const categories: IdName[] = product.categories;
    const investmentEffort: IdName = { name: product?.investmentEffort };
    const businessModels: IdName[] = product?.businessModels;
    const trl: IdName = product?.trl;
    return [
      { title: Tag.CATEGORIES.title, icon: <BiChip />, tags: categories },
      {
        title: Tag.BUSINESS_MODELS.title,
        icon: <BiBriefcaseAlt2 />,
        tags: businessModels,
      },
      { title: Tag.TRL.title, icon: <BiTimer />, tags: [trl] },
      {
        title: Tag.INVESTMENT_EFFORT.title,
        icon: <BiMoney />,
        tags: [investmentEffort],
      },
    ];
  } else return [];
};

export const getKeyByValue = (object: { [key: string]: any }, value: any) => {
  return Object.keys(object).find((key: string) => object[key] === value);
};

export function nameof<T>(
  obj: T,
  expression: (x: { [Property in keyof T]: () => string }) => () => string
): string {
  const res: { [Property in keyof T]: () => string } = {} as {
    [Property in keyof T]: () => string;
  };
  Object.keys(obj as Object).map((k) => (res[k as keyof T] = () => k));
  return expression(res)();
}
