import React from "react";
import styled from "styled-components";

import theme from "../../theme";
import {useNavigate} from "react-router-dom";

const Button = styled.div`
  position: absolute;
  z-index: 110;

  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  margin-left: 80px;
  padding: 7px 20px 7px 15px;

  font-family: ${theme.fonts.dinCondM};
  font-size: 14px;
  color: ${theme.colors.green};

  border: 1px solid ${theme.colors.green};
  border-radius: 20px;
  cursor: pointer;

  i {
    margin-right: 7px;

    font-size: 19px;
  }

  @media (max-width: ${theme.media.tab}) {
    color: ${theme.colors.darkBlue};
    background: transparent;

    i {
      font-size:  20px;
    }
  }
`;

export const BackButton:React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <i className="fal fa-angle-left"></i>
        Назад
      </Button>
    </>
  );
}
