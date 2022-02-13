import { useState } from "react";
import { BiSearch } from "react-icons/bi";

import {setCharacterToFind, setPage} from "../../redux/RickAndMorty/api-slice";
import { useAppDispatch } from "../../redux/hooks/hooks";

import {
  Searchbar,
  Form,
  Button,
  Input,
  Select,
  SelectText,
} from "./SearchForm.styled";


export default function ServerSearchForm() {
  const dispatch = useAppDispatch();

  // Берем данные из инпутов для фетча
  const [character, setCharacter] = useState({
    name: "",
    gender: "",
    status: "",
  });

  // При сабмите формы обнулям страницу пагинации +
  // сетим в стейт данные для фетча
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(setCharacterToFind(character));
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.currentTarget;
    setCharacter((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };


  return (
    <Searchbar>
      <span>SERVER FILTER FORM</span>
      <Form onSubmit={handleFormSubmit} action="submit">
        <Button type="submit">
          <BiSearch />
        </Button>

        <Input
          placeholder="Enter search params"
          onChange={inputChangeHandler}
          name="name"
          value={character.name}
          type="text"
        />

        <SelectText>Gender</SelectText>

        <Select
          onChange={inputChangeHandler}
          value={character.gender}
          name="gender"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <SelectText>Status</SelectText>
        
        <Select
          value={character.status}
          onChange={inputChangeHandler}
          name="status"
        >
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Form>
    </Searchbar>
  );
}
