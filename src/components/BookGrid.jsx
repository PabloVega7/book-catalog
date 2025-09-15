import BookCard from "./BookCard.jsx";
import AddCard from "./AddCard.jsx";

export default function BookGrid({ isbnList, onAdd }) {
  return (
    <main className="content">
      <div className="grid">
        {isbnList.slice(0, 2).map((isbn) => (
          <BookCard key={isbn} isbn13={isbn} />
        ))}
        <AddCard onClick={onAdd} />
      </div>
    </main>
  );
}
