type IUser = {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  sex: number,
  profilePicture: string,
  position: string
}

type IAddress = {
  country: { name: string },
  city: { name: string },
  street: string,
  house: string,
  zipCode: string,
  longitude: string,
  latitude: string
}

type ICompany = {
  name: string,
  logo: string,
  address: IAddress,
}

type IProduct = {
  id: number,
  name: string,
  description: string,
  picture: string,
  type: {id: number,name: string},
  categories: Array<{ id: number, name: string }>,
  implementationEffortText: string | null,
  investmentEffort: string,
  trl: { id: number, name: string },
  video: string,
  user: IUser,
  company: ICompany
  businessModels: Array<{ id: number, name: string }>
} | null

type IConfig = {
  id: number,
  logo: string,
  mainColor: string,
  hasUserSection: boolean
} | null

type IAppState = {
  allProducts?: Array<IProduct>,
  product?: IProduct,
  trl?: [{ id: string, name: string, description: string | null }] | [] | null,
  config?: IConfig,
  error?: any,
  loading?: boolean,
};

type IdName = {
  id?: number,
  name: string,
}