'use client';
import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import footer from '../Footer.module.scss';

const Subscribe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={footer.blockSubscribe}>
      <div className={footer.selectBlock}>
        <label htmlFor="region">Change region</label>
        <select name="region" id="region">
          <option value="Global" selected>
            Global
          </option>
          <option value="Batken">Batken</option>
          <option value="IK">Issyk Kul</option>
        </select>
      </div>

      <div>
        <p>
          I need more travel! Please brighten <br />
          my inbox with hot deals, new trips <br />
          and great tales.
        </p>

        <button onClick={openModal}>
          <i className={footer.iEnvelope}></i>
          Subscribe
        </button>

        {isModalOpen && <Modal onClose={closeModal} isModalOpen={isModalOpen} />}
      </div>
    </div>
  );
};

export default Subscribe;
