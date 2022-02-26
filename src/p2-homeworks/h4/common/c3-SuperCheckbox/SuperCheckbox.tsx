import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
	onChangeChecked?: (checked: boolean) => void
	spanClassName?: string
	testOnChange?: (checked: boolean)=>void
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
	{
		type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
		onChange,
		onChangeChecked,
		className, spanClassName,
		testOnChange,
		children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

		...restProps// все остальные пропсы попадут в объект restProps
	}
) => {

	const finalInputClassName = `${s.checkbox} ${className ? className : ''}`



	function onChangeCallback(e:ChangeEvent<HTMLInputElement>) {
		if (testOnChange) {
			testOnChange(e.currentTarget.checked)
		}
		if (onChangeChecked) {
			onChangeChecked(e.currentTarget.checked)
		}

	}

	return (
		<label>
			<input
				type={'checkbox'}
				onChange={onChangeCallback}
				className={finalInputClassName}

				{...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
			/>
			{children && <span className={s.spanClassName}>{children}</span>}
		</label> // благодаря label нажатие на спан передастся в инпут
	)
}

export default SuperCheckbox
