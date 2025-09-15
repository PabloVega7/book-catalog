import { useState } from "react";
import Header from "./components/Header.jsx";
import BookGrid from "./components/BookGrid.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // two books shown
  const [isbnList, setIsbnList] = useState(["9781711470559", "9781617294136"]);

  const addIsbn = () => {
    const value = window.prompt("Enter a 13-digit ISBN:");
    if (!value) return;
    const clean = value.replace(/\D/g, "");
    if (clean.length !== 13) return alert("Please enter a 13-digit ISBN.");
    setIsbnList((prev) => [...prev, clean]);
  };

  return (
    <>
      <Header title="Book Catalog v1" />
      <BookGrid isbnList={isbnList} onAdd={addIsbn} />
      <Footer />
    </>
  );
}
