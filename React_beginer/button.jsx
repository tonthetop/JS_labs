const styleButton = {
  display: "block",
  width: "115px",
  height: "25px",
  background: "#4E9CAF",
  padding: "0",
  border: "none",
  textAlign: "center",
  borderRadius: "5px",
  color: "white",
  fontWeight: "bold",
  lineHeight: "25px",
  fontFamily: "Arial",
  fontSize: "15px",
  textDecoration: "none",
};
function Button(props) {
  props = { ...props };
  let Component = props.href ? "a" : "button";
  if (!props.hasOwnProperty("title")) {
    props = Object.assign({ title: "defaultTitle" }, props);
  }
  return (
    <Component {...props} onClick={() => props.onClick(props)}>
      {props.title}
    </Component>
  );
}
function App() {
  function handleClick(props) {
    console.log(props.title);
  }
  return (
    <div id="wrapper">
      <Button
        style={styleButton}
        title="ClickMe!"
        href="./"
        onClick={handleClick}
      />
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
