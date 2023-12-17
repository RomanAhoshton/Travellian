export type UserContextType = {
  setUser: (arg: boolean | string) => void;
  user: boolean | string;
};

export interface signInInputs {
  email: string;
  password: string;
  name: string;
}

export interface loginInputs {
  email: string;
  password: string;
}

export interface Slider {
  image?: string;
  title?: string;
  stars?: string;
  subtitle?: string;

  price?: {
    from: string
    number:string
  };
  details?:string;
  avatar?: string,
  textReview?:string
  startReview?:()=>JSX.Element,
  fullName?: string,
  position?: string,
}
