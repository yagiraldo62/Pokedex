import React, { useEffect, useRef } from 'react';
import { PoseGroup } from 'react-pose';
import { TopStyle, BottomStyle, ContStyle, Cont } from './style.module.scss';
import { Top, Bottom, DetailsContainer } from './motion';

export default (props) => {
	const { open, types, topCont, bottomCont, bg } = props;
	const top = useRef();
	useEffect(() => {
		if (!top.current) return;
		top.current.style.background = bg;
	}, [open, bg]);
	return (
		<PoseGroup>
			{open && (
				<DetailsContainer key="cont" className={ContStyle}>
					<div className={Cont}>
						<Top ref={top} className={TopStyle} key="top" children={topCont} />
						<Bottom className={BottomStyle} key="bottom" children={bottomCont} />
					</div>
				</DetailsContainer>
			)}
		</PoseGroup>
	);
};
