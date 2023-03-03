import React, {useEffect, useState} from 'react';

type Prop = {
	data: Record<string, string>;
};

function Button({data}: Prop) {
	const [keyCapitalized, setKeyCapitalized] = useState('');
	useEffect(() => {
		const key = Object.keys(data)[0];
		const capitalized = key.charAt(0).toUpperCase() + key.slice(1);
		setKeyCapitalized(capitalized);
	}, [data]);

	return (
		<a href={Object.values(data)[0]} target='_blank' rel='noreferrer'>
			<button name='Repositório'>{keyCapitalized}</button>
		</a>
	);
}

export default Button;
