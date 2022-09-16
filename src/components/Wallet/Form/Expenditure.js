export default function Expenditure({input}) {
    return (
        <label className="form__label">Витрата, грн
            <input className="form__input minus" type="number" onChange={input}/>
            <button className="form__btn minus">Додати</button>
        </label>    
    )
}