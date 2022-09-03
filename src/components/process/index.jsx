import React from 'react';

const Process = () => {
	return (
		<div className='process'>
			<div className='min-height-wrapper'>
				<div
					className='heading'
					style={{ backgroundImage: `url("/downloads/bg.png")` }}>
					<h1>Process</h1>
				</div>
				<div className='image-wrapper container'>
					<img
						src={
							window.innerWidth > 992
								? '/process/desktop-process.svg'
								: '/process/mobile-process.svg'
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Process;
