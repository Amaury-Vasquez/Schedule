import { useContext, useMemo } from "react";
import { AiOutlineClear, AiOutlineSearch } from "react-icons/ai";

import Context from "../../context";
import { Button, Search, Wrapper } from "./styles";
import { useSearch } from "../../hooks/useSearch";

export const SearchBar = () => {
  const { setMatched, subjects } = useContext(Context);
  const { filterSearch, handleChange, setValue, value } = useSearch(subjects);

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        if (setMatched) setMatched(() => filterSearch);
      }}
    >
      <Button type="submit">
        <AiOutlineSearch />
      </Button>
      <Search type="input" value={value} onChange={(e) => handleChange(e)} />
      <Button type="button" onClick={() => setValue("")}>
        <AiOutlineClear />
      </Button>
    </Wrapper>
  );
};
