import { AiOutlineClear, AiOutlineSearch } from "react-icons/ai";

import { Search, Wrapper } from "./styles";
import { useSearch } from "../../hooks/useSearch";

export const SearchBar = (props: { callback: Function }) => {
  const { value, handleChange } = useSearch();
  return (
    <Wrapper>
      <AiOutlineSearch />
      <Search type="input" value={value} onChange={(e) => handleChange(e)} />
      <AiOutlineClear />
    </Wrapper>
  );
};
