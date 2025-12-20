import { useCallback, useEffect, useState } from 'react';

export default function useFetch(url, options = {}) {
	const [data, setData] = useState(null);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async () => {
		setPending(true);
		try {
			const response = await fetch(url, { ...options });
			if (!response.ok) throw new Error(response.statusText);
			const result = await response.json();
			setData(result);
			setError(null);
			setPending(false);
		} catch (e) {
			setError(`${e}. Some error occured.`);
			setPending(false);
		}
	}, [url, options]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, pending, error };
}
