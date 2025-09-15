export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      © {year} Book Catalog -- COMP 3170 -- Pablo Vega
    </footer>
  );
}
