import React, {ReactElement} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../theme";

const Button = styled.button<{theme: string, fullwidth: boolean, disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;
  height: 35px;
  padding: 0px 50px 0 50px;

  font-family: ${theme.fonts.bebasB};
  font-size: calc(${theme.fontSize} * 0.85);

  cursor: pointer;
  border: 0px;
  
  @media (max-width: ${theme.media.tab}) {
    padding: 2px 50px 0 50px;
  }

  ${(props) =>
    props.theme === "dark" &&
    `background: ${theme.colors.darkBlue}; color: #ffffff;`}
  ${(props) =>
    props.theme === "green" &&
    `color: ${theme.colors.darkBlue}; background: ${theme.colors.green};`}
  ${(props) =>
          props.theme === "green-border" &&
          `color: ${theme.colors.green}; 
      border: 1px solid ${theme.colors.green};  
      background: transparent;
      
      &:hover {
        color: ${theme.colors.darkBlue}; 
      
        background: ${theme.colors.green}; 
      }`}
  ${(props) =>
          props.theme === "green-icon-border" &&
          `color: ${theme.colors.green}; 
      border: 1px solid ${theme.colors.green};  
      background: transparent;
      
      svg {
        margin: 0 8px 0 0;
          
        stroke: ${theme.colors.green};
      }
      
      &:hover {
        color: ${theme.colors.darkBlue}; 
      
        background: ${theme.colors.green}; 
      
        svg {
          stroke: ${theme.colors.darkBlue};
        }
      }`}
  ${(props) => props.fullwidth && `width: 100%;`}
  ${(props) => props.disabled && `pointer-events: none !important; opacity: .5;`}
`;

type ButtonProps = {
  text: string | ReactElement;
  type?: string;
  href?: string;
  theme?: string;
  fullwidth?: boolean;
  disabled?: boolean;
}

const ButtonComponent:React.FC<ButtonProps> = ({
  text,
  type = "div",
  href = '',
  theme = "dark",
  fullwidth = false,
  disabled = false
}) => {
  return (
    <>
      {type == "link" && !disabled ? (
        <Link to={href} >
          <Button theme={theme} fullwidth={fullwidth} disabled={disabled}>
            {text}
          </Button>
        </Link>
      ) : (
        <Button theme={theme} fullwidth={fullwidth} disabled={disabled}>
          {text}
        </Button>
      )}
    </>
  );
}

export default ButtonComponent;
