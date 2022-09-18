import './buttons.css'

export default function Buttons({modalOpen}) {
    return (
        <ul className='buttons__list'>
            <li className='buttons__item'>
                <button type="button" className='buttons__btn plus' onClick={modalOpen}>Дохід</button>
            </li>
            <li className='buttons__item'>
                <button type="button" className='buttons__btn minus' onClick={modalOpen}>Витрата</button>
            </li>
        </ul>
    )
}