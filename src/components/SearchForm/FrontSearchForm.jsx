import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Searchbar,
  Form,
  Button,
  Input,
  Select,
  SelectText,
} from "./SearchForm.styled";

import { setFilter } from "../../redux/RickAndMorty/api-slice.js";
import { BiSearch } from "react-icons/bi";

export default function FrontSerchForm() {
  const dispatch = useDispatch();

  // Берем данные из инпутов для создания фильтра
  const [character, setCharacter] = useState({
    name: "",
    gender: "",
    status: "",
  });

  // диспатч данных фильтра
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    dispatch(setFilter(character));
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.currentTarget;

    setCharacter((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };
  return (
    <Searchbar>
      <span>FRONT FILTER FORM</span>
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
