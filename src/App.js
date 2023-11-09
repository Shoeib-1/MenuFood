import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import Category from "./components/Category";
import Card from "./components/Card";
import { items } from "./Data";
import { useState } from "react";
function App() {
  const[itemsData , setItemsData] = useState(items);
  // get all category uniqe
    const allCategory = ['الكل',...new Set(items.map((i)=>i.category))]
  // filter By Category
  const filterByCategory =(meal)=>{
    if (meal === "الكل") {
     setItemsData(items);
    }else{
        const newArr =  items.filter((item)=>item.category === meal);
        setItemsData(newArr);
      }
  }
  // filter By search
  const filterBySearch =(nameOfMeal)=>{
    if (nameOfMeal !== '') {
      const newArr =  items.filter((item)=>item.title === nameOfMeal);
      setItemsData(newArr);
    }else{
       
      }
  }
  return (
    <div className="">
      <NavBar filterBySearch={filterBySearch} />

      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
        <Card itemsData={itemsData}  />
      </Container>
    </div>
  );
}

export default App;
