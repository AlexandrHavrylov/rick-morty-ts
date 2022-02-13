import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { setPage } from "../../redux/RickAndMorty/api-slice";

import { Btn } from "./Button.styled";

export default function LoadMore() {
  const dispatch = useAppDispatch();
  const curPage = useAppSelector((state) => state.api.curentPage);

  const handeClick = useCallback(() => {
    dispatch(setPage(curPage + 1));
  }, [curPage, dispatch]);

  return (
    <Btn type="button" onClick={handeClick}>
      Load More
    </Btn>
  );
}
