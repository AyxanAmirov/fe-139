import "./App.css";

function App() {
  return (
    <>
      <Book/>
    </>
  );
}

function BookName() {
  return <p>Kitabın adı : Kitab oğrusu</p>;
}
function BookPrice() {
  return <p>Kitabın Qiyməti : 11AZN </p>;
}
function BookAuthor() {
  return <p>Kitabın Yazarı : Markus Zusak </p>;
}

function Book(){
return(
  <>
  <BookName />
  <BookPrice />
  <BookAuthor/>
  </>
)
}
export default App;
