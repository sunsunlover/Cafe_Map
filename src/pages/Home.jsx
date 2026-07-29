import "./cafehome.css";
import BottomNav from "../components/BottomNav";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Home() {
  return (
    <div className="map-page">

      <MapContainer
        center={[35.681236, 139.767125]}
        zoom={13}
        className="map"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      <BottomNav />

    </div>
  );
}

export default Home;