import {MapContainer, TileLayer} from "react-leaflet";

import styles from "/src/components/Map/Map.module.scss";

export default function Map() {
    return (
        <section>
            <h2>
                Location
            </h2>

            <MapContainer
                center={[44.63960682314418, -63.57839953510882]}
                zoom={17}
                scrollWheelZoom={false}
                className={styles.map}
            >
                <TileLayer attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </section>
    );
}