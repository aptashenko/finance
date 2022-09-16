import Select from 'react-select'
import Calendar from './Calendar';


export default function Profit({ input, handleCategory, handleManager }) {
    const services = [
        { value: 'servOne', label: 'Підготовка тендеру' },
        { value: 'servTwo', label: 'Супутні послуги' }
    ];
    const manager = [
        { value: 'nameOne', label: 'Артем Пташенко' }
    ];
    return (
        <>
            <label className="form__label">
                <input className="form__input plus" type="number" placeholder="Сума, UAH" onChange={input} />
            </label>
            <Select options={services} onChange={handleCategory} />
            <Select options={manager} onChange={handleManager} />
            <Calendar />
            <div className="form__btnContainer">
                <button className="form__btn confrim">Додати</button>
                <button className="form__btn cancel">Скасувати</button>
            </div>
        </>
    )
}