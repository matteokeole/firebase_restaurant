import {MapContainer, Marker, TileLayer} from "react-leaflet";

import styles from "/src/components/Map/index.module.scss";

export default function Map() {
	return (
		<section>
			<h2>
				Location
			</h2>

			<MapContainer
				center={[44.64028767073139, -63.578211443474416]}
				zoom={17}
				scrollWheelZoom={false}
				className={styles.map}
			>
				<TileLayer attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				<Marker position={[44.64028767073139, -63.578211443474416]}></Marker>
			</MapContainer>
		</section>
	);
}