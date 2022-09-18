import './modal.css';
import MainForm from '../Wallet/Form/Form';


export default function Modal({modalOpen, handleSubmit, type}) {
    return (
        <div className="modal__backdrop" onClick={modalOpen}>
            <div className="modal__content">
                <MainForm handleSubmit={handleSubmit} type={type} />
            </div>
        </div>
    )
}