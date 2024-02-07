'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import IconClose from '../../../public/assets/icon/IconClose';
import modal from './Modal.module.scss';

interface ModalData {
  firstname: string;
  lastname: string;
  country: string;
  email: string;
  isChecked: boolean;
}

interface ModalProps {
  onClose: () => void;
  isModalOpen: boolean; // Receive the prop
}

const Modal: React.FC<ModalProps> = ({ onClose, isModalOpen }) => {
  const [data, setData] = useState<ModalData>({
    firstname: '',
    lastname: '',
    country: '',
    email: '',
    isChecked: false,
  });

  const submitFormHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      onClose(); // Close the modal
    } catch (e) {
      alert('Error in Field');
    }
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="modal__wrapper">
      <div className={modal.modal}>
        <div className={modal.modal__heading}>
          <h3>Subscribe to Dotation</h3>
          <IconClose onClick={onClose} />
        </div>

        <form onSubmit={submitFormHandler}>
          <div className={modal.formControl}>
            <label htmlFor="title">First name</label>
            <input
              required
              type="text"
              name="firstname"
              value={data.firstname}
              onChange={inputChangeHandler}
              placeholder="Track Title"
            />
          </div>
          <div className={modal.formControl}>
            <label htmlFor="duration">Last Name</label>
            <input
              required
              type="text"
              name="lastname"
              value={data.lastname}
              onChange={inputChangeHandler}
              placeholder="Duration"
            />
          </div>

          <div className={modal.formControl}>
            <label htmlFor="country">Change region</label>
            <select name="country" id="country">
              <option value="Kyrgyzstan" selected>
                Kyrgyzstan
              </option>
              <option value="Russia">Russia</option>
            </select>
          </div>

          <div className={modal.formControl}>
            <label htmlFor="orderNumber">Email address</label>
            <input
              required
              type="email"
              name="email"
              value={data.email}
              onChange={inputChangeHandler}
              placeholder="Order number"
            />
          </div>

          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className={`${modal.backdrop} ${isModalOpen ? modal : ''}`} onClick={onClose} />
    </div>
  );
};

export default Modal;
