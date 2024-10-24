import { Qbank, Angiogram, Ecg, Echo } from '../sanity/types';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Question = Ecg | Qbank | Angiogram | Echo;
