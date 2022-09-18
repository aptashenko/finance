import { Field } from 'formik';

export default function Cons() {
    return (
        <>
            <label className="form__label">Сума, грн
                <Field className="form__input plus" name="amount" type="number" placeholder="Сума, UAH" />
            </label>
            <label className="form__label">Дата надходження
                <Field className="form__input" name="date" type="datetime-local" />
            </label>
            <label className="form__label">Відповідальний
                <Field as="select" className="form__input" name="manager">
                    <option></option>
                    <option value="Artem">Артем Пташенко</option>
                    <option value="Sasha">Олександра Пташенко</option>
                </Field>
            </label>
            <label className="form__label">Категорія
                <Field as="select" className="form__input" name="category">
                    <option></option>
                    <option value="tender">Підготовка тендеру</option>
                    <option value="lawyers-services">Юридичні послуги</option>
                </Field>
            </label>
            <div className="form__btnContainer">
                <button className="form__btn confrim" type="submit">Додати</button>
                <button className="form__btn cancel">Скасувати</button>
            </div>
        </>
    )
}