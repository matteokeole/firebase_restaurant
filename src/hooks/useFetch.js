import {useEffect, useState} from "react";

/**
 * @param {String} url
 */
export default function useFetch(url) {
	const [json, setJson] = useState(null);

	useEffect(() => {
		const getJson = async () => {
			const response = await fetch(url);

			if (!response.ok) {
				return;
			}

			const json = await response.json();

			setJson(json);
		};

		getJson();
	}, []);

	return json;
}