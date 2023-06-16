/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/object-curly-spacing */
import React, { useEffect, useState } from 'react';
import Button from '../Button';
import './Modal.css';
import { closeButton } from '../../svg';
import { type ModalProject } from '../ProjectPage';

type Prop = {
	data: ModalProject;
};

function Modal({ data }: Prop) {
	const [dataModal, setDataModal] = useState<ModalProject>({ modal: '' });

	useEffect(() => {
		setDataModal({ ...data });
	}, [data]);

	function handleClick() {
		setDataModal({ modal: '' });
	}

	return (
		<div
			className={`
			modal
			${dataModal.modal === 'active' ? 'active' : ''}
		`}
		>
			<h3>{dataModal.title}</h3>
			<div className='box-video'>
				<div>
					<video
						src={dataModal.srcs ? dataModal.srcs[1].srcMp4 : ''}
						autoPlay
						controls
						loop
					/>
				</div>
				{dataModal.aboutContent}
			</div>
			<div className='buttons'>
				{dataModal.repos
					? dataModal.repos.map((data) => {
							if (Object.values(data)[0] === '') {
								return;
							}

							return (
								<Button
									key={Object.values(data)[0]}
									data={data}
								/>
							);
					  })
					: ''}
			</div>
			<button
				onClick={() => {
					handleClick();
				}}
				className='close-modal'
			>
				{closeButton}
			</button>
		</div>
	);
}

export default Modal;
