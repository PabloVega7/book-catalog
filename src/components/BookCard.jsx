import { useEffect, useState } from "react";

export default function BookCard({ isbn13 }) {
  const [book, setBook] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        setStatus("loading");
        const res = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!ignore) {
          setBook(data);
          setStatus("done");
        }
      } catch {
        if (!ignore) setStatus("error");
      }
    })();
    return () => {
      ignore = true;
    };
  }, [isbn13]);

  const title = book?.title || `ISBN ${isbn13}`;
  const authors = book?.authors || "Unknown author";
  const image =
    book?.image || "https://via.placeholder.com/200x260?text=No+Cover";
  const detailsUrl = `https://itbook.store/books/${isbn13}`;

  return (
    <article className="card">
      <div className="card__media">
        <img src={image} alt={title} />
      </div>
      <div className="card__body">
        <h2 className="card__title" title={title}>
          {title}
        </h2>
        <p className="card__meta">{authors}</p>
      </div>
      <a
        className="card__link"
        href={detailsUrl}
        target="_blank"
        rel="noopener noreferrer">
        View details
      </a>

      {status === "loading" && <div className="card__badge">Loading…</div>}
      {status === "error" && <div className="card__badge error">Error</div>}
    </article>
  );
}
