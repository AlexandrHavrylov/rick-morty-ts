import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Oval } from "react-loader-spinner";

import { fetchCharacters } from "../../redux/RickAndMorty/api-operations";
import { resetCharacters } from "../../redux/RickAndMorty/api-slice";
import LoadMore from "../Button/LoadMore";
import Characters from "../Characters/Characters";
import ServerSerchForm from "../SearchForm/ServerSearchForm";
import FrontSerchForm from "../SearchForm/FrontSearchForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { Wrapper } from "./App.styled";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  const dispatch = useAppDispatch();
  const characterToFind = useAppSelector((state) => state.api.characterToFind);
  const page = useAppSelector((state) => state.api.curentPage);
  const isLoading = useAppSelector((state) => state.api.isLoading);

  // Если это первая страница обнуляем массив персонажей в стейте
  // и фетчим персонажей в зависимости от данных из инпутов.
  // зависимости - меняется персонаж для поиска или меняется страница пагинации
  useEffect(() => {
    page === 1 && dispatch(resetCharacters());
    dispatch(fetchCharacters(characterToFind));
  }, [characterToFind, page]);

  return (
    <Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ServerSerchForm />
      <FrontSerchForm />

      <Characters />
      {isLoading && <Oval color="#00BFFF" height={80} width={80} />}
      <LoadMore />
    </Wrapper>
  );
}
