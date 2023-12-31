import { Circle } from "better-react-spinkit";

export default function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Circle color="#3CBC28" size={150} />
      </div>
    </center>
  );
}
