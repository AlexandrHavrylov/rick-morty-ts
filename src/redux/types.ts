// store
export type TCharacter = {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
};

export type TFindParams = {
  name: string;
  gender: string;
  status: string;
};

export interface IState {
  characters: TCharacter[];
  characterToFind: TFindParams;
  isLoading: boolean;
  curentPage: number;
  filter: TFindParams;
}
