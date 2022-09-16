import ProfitForm from './ProfitForm';
import Expenditure from './Expenditure';
import './form.css';


function Form({ submit, input, isProfitInput, handleCategory, handleManager }) {
    return (
        <form className="form" onSubmit={submit}>
            {isProfitInput ? <ProfitForm input={input} handleManager={handleManager} handleCategory={handleCategory} /> : <Expenditure input={input} />} 
        </form>
    )
}

export default Form;