import './buttons.css'

export default function Buttons({modal}) {
    return (
        <ul className='buttons__list'>
            <li className='buttons__item'>
                <button type="button" className='buttons__btn plus' onClick={modal}>Дохід</button>
            </li>
            <li className='buttons__item'>
                <button type="button" className='buttons__btn minus' onClick={modal}>Витрата</button>
            </li>
        </ul>
    )
}