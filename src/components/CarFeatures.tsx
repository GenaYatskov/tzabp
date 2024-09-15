import React, { FC } from 'react'
import { ICarFeature } from '../types/ICarFeatures'
import styles from './CarFeatures.module.css'

export const CarFeatures: FC<{ features: ICarFeature[] }> = ({ features }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '15px',
				padding: '25px',
				background: '#161E31',
				borderRadius: '15px'
			}}
		>
			<div
                className={styles.titleBlock}
			>
				{features.slice(0, 4).map((item, index) => (
					<div
						style={{
							fontFamily: 'Century Gothic',
							fontSize: '22px',
							color: 'white',
                            fontWeight: 'bold',
							flexGrow: index !== 3 ? 0 : 1,
							textAlign: index !== 3 ? 'left' : 'right'
						}}
						key={index}
					>
						{item.Value}
					</div>
				))}
			</div>

			{features.slice(4).map((item, index) => (
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
                        flexWrap: 'wrap',
						gap: '10px'
					}}
					key={index}
				>
					<div
						style={{
							fontFamily: 'Century Gothic',
							fontSize: '20px',
							color: 'white',
                            fontWeight: 'bold',
                            textWrap: 'pretty'
						}}
					>
						{item.Variable + ':'}
					</div>
					<div
						style={{
							fontFamily: 'Century Gothic',
							fontSize: '20px',
							color: 'white',
                            textWrap: 'pretty'
						}}
					>
						{item.Value}
					</div>
				</div>
			))}
		</div>
	)
}
