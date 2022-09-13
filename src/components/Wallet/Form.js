function Form({submit, input}) {
    return (
        <form className="form" onSubmit={submit}>
            <label className="form__label">Доходи, грн
                <input className="form__input plus" type="number" onChange={input} />
                <button className="form__btn plus">Додати</button>
            </label>
            <label className="form__label">Витрата, грн
                <input className="form__input minus" type="number" onChange={input}/>
                <button className="form__btn minus">Додати</button>
            </label>
        </form>
    )
}

export default Form;