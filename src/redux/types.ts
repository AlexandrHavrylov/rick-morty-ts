import { setPage, setCharacterToFind, resetCharacters, setFilter } from "./RickAndMorty/api-slice"

// store
export type TCharacter = {
    id: number,
    name: string,
    gender: string,
    status: string
}

export type TFindParams = {
    name: string,
    gender: string,
    status: string
}

export interface IState {
    characters: TCharacter[],
    characterToFind: TFindParams,
    isLoading: boolean,
    curentPage: number,
    filter: TFindParams
}

//actions

export interface ISetPage {
payload: number
}

export interface ISetCharacterToFind {
    payload: TFindParams
}

export interface ISetFilter {
      payload: TFindParams
}