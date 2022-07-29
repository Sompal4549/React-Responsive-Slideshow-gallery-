import Slider from "./Slider";
import slides from "./data";
export default function App() {
  const containerStyle = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div style={containerStyle}>
      <Slider slides={slides} />
    </div>
  );
}
