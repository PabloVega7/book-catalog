export default function AddCard({ onClick }) {
  return (
    <button className="card add-card" onClick={onClick} aria-label="Add book">
      <span className="add-card__plus">＋</span>
      <span className="add-card__text">Add</span>
    </button>
  );
}
