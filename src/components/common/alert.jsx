import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

export default function Alert({ isOpen, setIsOpen }) {
	return (
		isOpen && (
			<BootstrapAlert
				key={'warning'}
				variant={'warning'}
				onClose={() => setIsOpen(false)}
				dismissible>
				<b>NOTE:</b> This website was built in 2021 by the Training & Placement
				Coordinators of NSUT East Campus (formerly AIACT&R). This was intended
				to be used as a Campus' Training & Placement Website that would have
				been shared with the companies and recruiters along with the Placement
				Brochure. However, considering the management, it was never approved and
				had been sitting on my domain since then. Since it was never approved,
				the content, although true to my knowledge should not be considered for
				official purposes. Contact your respective coordinators or the Training
				& Placement Officer for any details required. However, for any queries
				related to this website, you can email me at{' '}
				<a
					href='mailto:contact@kartikbhalla.dev'
					target='_blank'
					rel='noreferrer'>
					contact@kartikbhalla.dev
				</a>{' '}
				or you can visit{' '}
				<a href='https://www.kartikbhalla.dev' target='_blank' rel='noreferrer'>
					www.kartikbhalla.dev
				</a>
				.
				<br />
				Cheers!
				<br />
				<br />~ Kartik Bhalla, Batch 2018-2022, AIACT&R
			</BootstrapAlert>
		)
	);
}
