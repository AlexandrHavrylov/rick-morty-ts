import { useAppSelector } from "../../redux/hooks/hooks";
import { TCharacter, TFindParams } from "../../redux/types";

import { CharactersList, Charcter, Main } from "./Characters.styled";

export default function Characters() {
  // берем данные из стейта
  const chars = useAppSelector((state) => state.api.characters);
  const filtr = useAppSelector((state) => state.api.filter);

  // функция для фильтрации стейта
  const getFilterCharacters = (allCharacters: TCharacter[], filter: TFindParams) => {
    const normalizedFilterNameValue = filter.name?.toLowerCase().trim();
    const normalizedFilterGenderValue = filter.gender?.toLowerCase().trim();
    const normalizedFilterStatusValue = filter.status?.toLowerCase().trim();

    const filtredCharacters = allCharacters?.filter((char) => {
      return (
        char.name.toLowerCase().includes(normalizedFilterNameValue) &&
        char.gender.toLowerCase().includes(normalizedFilterGenderValue) &&
        char.status.toLowerCase().includes(normalizedFilterStatusValue)
      );
    });
  
    return filtredCharacters;
  };

  // фильтруем персонажай для отрисовки
  const characters = getFilterCharacters(chars, filtr);


  return (
    <Main>
      <section>
        <CharactersList>
          {characters?.map((char) => (
            <Charcter key={char.id}>
              <img src={char.image} alt="" />
              <p>Name: {char.name}</p>
              <p>Gender: {char.gender}</p>
              <p>Status: {char.status}</p>
            </Charcter>
          ))}
        </CharactersList>
      </section>
    </Main>
  );
}
