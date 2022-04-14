import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "./Card";
import angular from "../img/angular.png";
import css from "../img/css.png";
import html from "../img/html.png";
import js from "../img/js.png";
import nodejs from "../img/nodejs.png";
import react from "../img/react.png";
import scss from "../img/scss.png";
import vue from "../img/vue.png";

export default function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: html, stat: "" },
      { id: 1, img: html, stat: "" },
      { id: 2, img: css, stat: "" },
      { id: 2, img: css, stat: "" },
      { id: 3, img: js, stat: "" },
      { id: 3, img: js, stat: "" },
      { id: 4, img: scss, stat: "" },
      { id: 4, img: scss, stat: "" },
      { id: 5, img: react, stat: "" },
      { id: 5, img: react, stat: "" },
      { id: 6, img: vue, stat: "" },
      { id: 6, img: vue, stat: "" },
      { id: 7, img: angular, stat: "" },
      { id: 7, img: angular, stat: "" },
      { id: 8, img: nodejs, stat: "" },
      { id: 8, img: nodejs, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <>
      <Container>
        {items.map((item, index) => (
          <Card item={item} key={index} id={index} handleClick={handleClick} />
        ))}
      </Container>
    </>
  );
}
