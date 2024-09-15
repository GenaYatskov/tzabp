import React, { FC, useState } from 'react'
import { getFromLocalStorage } from '.services/localStorage'
import styles from './SearchInput.module.css'

interface ISearchInput {
	handlerGetCarFeaturesFromVin: (vin: string) => void
}

export const SearchInput: FC<ISearchInput> = ({
	handlerGetCarFeaturesFromVin
}) => {
	const [searchString, setSearchString] = useState<string>('')
	const [isStoryOpen, setIsStoryOpen] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	const validateInput = (): boolean => {
		if (searchString.trim() === '') {
			setError('Поле не может быть пустым')
			return false
		}
		if (searchString.length > 17) {
			setError('Длина не может превышать 17 символов')
			return false
		}
		if (/[^a-zA-Z0-9]/.test(searchString)) {
			setError('Содержимое не должно содержать запрещенные символы')
			return false
		}
		setError(null)
		return true
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (validateInput()) {
			handlerGetCarFeaturesFromVin(searchString)
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.input}>
				<div
					style={{
						display: 'flex',
						padding: '1px',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#7367F0',
						borderRadius: '5px',
						zIndex: 20
					}}
				>
					<input
						value={searchString}
						onChange={e => setSearchString(e.target.value)}
						type='text'
						onFocus={() => setIsStoryOpen(true)}
						onBlur={() => setIsStoryOpen(false)}
						placeholder='Your VINcode'
						style={{
							border: 'none',
							background: '#161E31',
							borderRadius: '5px',
							padding: '10px',
							color: 'white',
							fontFamily: 'Century Gothic',
							fontSize: '24px',
							width: '100%',
							height: 'max-content',
							zIndex: 20
						}}
					/>
				</div>
				<div
					style={{
						position: 'absolute',
						top: isStoryOpen ? '60px' : '0px',
						left: '0',
						width: '100%',
						transition: '0.4s',
						maxHeight: isStoryOpen ? '300px' : '0px',
						opacity: isStoryOpen ? '100%' : '0%',
						background: '#252D41',
						borderRadius: '5px',
						zIndex: 10,
						boxShadow: '10px 10px 30px -1px rgba(0,0,0,0.20)',
						display: 'flex',
						flexDirection: 'column',
						gap: '15px',
						overflow: 'hidden'
					}}
				>
					{getFromLocalStorage().map((item, index) => (
						<div
							key={index}
							style={{
								padding: '10px',
								color: 'white',
								fontFamily: 'Century Gothic',
								fontSize: '20px',
								cursor: 'pointer',
								gap: '10px'
							}}
						>
							{item.model} {item.VINcode}
						</div>
					))}
				</div>
			</div>
			<button
				type='submit'
				style={{
					border: 'none',
					borderRadius: '5px',
					background: '#7367F0',
					fontFamily: 'Century Gothic',
					letterSpacing: '2px',
					color: '#FFFFFF',
					cursor: 'pointer',
					fontSize: '24px',
					padding: '10px 25px'
				}}
			>
				Search
			</button>
            {error && <div style={{ color: 'red'}}>{error}</div>}
		</form>
	)
}
