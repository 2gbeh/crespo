import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { Flex, Grid, SketchBox as Box } from "@/common/components";
//
import Styled, { styles } from "./Search.module";

type TSearch = {
  handleChange: null | (() => void);
  handleFilter?: string[];
};

const FormSearch = ({ handleChange, handleFilter }: TSearch) => {
  return (
    <Styled.Wrapper>
      <sup>
        <FiSearch />
      </sup>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search ( / )"
        required
      />
      <sub>
        <FiFilter />
      </sub>
    </Styled.Wrapper>
  );
};

export default React.memo(FormSearch);
