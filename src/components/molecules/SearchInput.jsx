import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const SearchInput = () => {
  return (
    <div>
      <input placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
