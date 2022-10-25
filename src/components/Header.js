import logo from "../image/kanzepts-logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="kanzepts logo" />
        <p>Kanzepts</p>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #faca00;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  padding: 1rem;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 35px;
    color: #027373;
  }

  p {
    margin: 0;
    font-family: "Annie Use Your Telescope", cursive;
    font-size: 1.5rem;
  }

  button {
    all: unset;
  }

  svg {
    height: 25px;
    width: 25px;
    fill: #0d0d0d;
  }
`;
