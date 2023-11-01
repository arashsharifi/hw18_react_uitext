import Alert from "react-bootstrap/Alert";

function NoteColor({ ondatatxt }) {
  const list = [];
  const groceries = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  let mygroceries = groceries[Math.floor(Math.random() * groceries.length)];

  list.push(mygroceries);
  const obj = new Set(list);
  const one = Array.from(obj);

  return (
    <>
      {one.map((variant) => (
        <Alert key={variant} variant={variant}>
          {ondatatxt}
        </Alert>
      ))}
    </>
  );
}

export default NoteColor;
