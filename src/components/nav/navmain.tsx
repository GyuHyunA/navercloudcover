import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { ICONS } from "../../assets/icons";

const navlist = [
  {
    id: "intro",
    name: "소개",
    index: 1,
  },
  {
    id: "cloud",
    name: "클라우드",
    index: 2,
  },
  {
    id: "media",
    name: "미디어",
    index: 3,
  },
];

const NavMain = () => {
  return (
    <NavMainStyled>
      <div className="nfwrap">
        <div className="logo">
          <Link href="/">
            <a>LOGO{/* <img src="" alt="" /> */}</a>
          </Link>
        </div>
        <ul className="list">
          {navlist.map((v, i) => {
            return (
              <li key={i} className={`${v.id}`}>
                <Link href="/">
                  <a className="cursor">{v.name}</a>
                </Link>
              </li>
            );
          })}
          <li className="hamberg">
            <Link href="/">
              <a className="cursor">
                <Image
                  src={ICONS.NAV_HAMBURGER}
                  alt=""
                  width="24px"
                  height="24px"
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </NavMainStyled>
  );
};

export default NavMain;

const NavMainStyled = styled.div`
  width: 100vw;
  height: 80px;
  position: fixed;
  z-index: 10;
  /* background-color: lightgray; */
  .nfwrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      margin-left: 50px;
    }
    ul {
      display: flex;
      font-weight: bold;
      color: white;
      li {
        margin-right: 42px;
      }
      li:nth-child(3) {
        margin-right: 90px;
      }
      li:nth-child(4) {
        margin-right: 50px;
      }
    }
  }
`;
