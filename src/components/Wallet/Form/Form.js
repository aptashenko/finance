import './form.css';
import { Formik, Form } from 'formik';
import Profit from './ProfitForm';
import shortid from 'shortid';
import Cons from './Cons';

export default function MainForm({ handleSubmit, type }) {

    const initialValues = {
        date: '',
        type: type,
        amount: 0,
        manager: '',
        category: '',
        isFuture: null,
        id: shortid(),
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="form">
                {type === 'Дохід' && <Profit />}
                {type === 'Витрата' && <Cons />}
            </Form>
        </Formik>
    )
}
