import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerOpen, setburgerOpen] = useState(0);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a className="logo">
        <img
          style={{ maxHeight: "90px" }}
          src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg"
        />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <p>
              <a key={index} href="#">
                {car}
              </a>
            </p>
          ))}
      </Menu>
      <RightMenu>
        <p>
          <a href="#">Shop</a>
        </p>
        <p>
          <a href="#">Tesla Account</a>
        </p>
        <CustomMenu onClick={() => setburgerOpen(1)} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CustomClose>
          <CloseIcon onClick={() => setburgerOpen(0)} />
        </CustomClose>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>)
          )}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">CyberTruck</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  position: fixed;
  transition: transform 0.2s ease-in;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose = styled.div`
  text-align: end;
  cursor: pointer;
`;
