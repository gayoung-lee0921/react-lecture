import React from "react";

const styles = {
  header: {
    backgroundColor: "#111",
    color: "#fff",
    margin: 0,
  },
  h1: {
    fontSize: 20,
    padding: 10,
  },
};

function Header({ title }) {
  // const fruits = ["kiwi", "apple"];
  // const [fruits01, fruits02] = fruits;
  // console.log(fruits01); kiwi
  // console.log(fruits02); apple
  // console.log(fruits); ["kiwi", "apple"]
  //console.log(props); object
  // const { title } = props;
  // console.log(title);  TODO-APP

  // const gayoung = { name: "이가영", age: 20, weight: 50 };
  // const { name: myname, age: myage, weight: myweight } = gayoung;
  // console.log(myname); 이가영 출력
  // console.log(myage); 20 출력
  // console.log(myweight); 50 출력

  return (
    <header className="header" id="header">
      <h1 className="header">{title}</h1>
    </header>
  );
}
export default Header;
