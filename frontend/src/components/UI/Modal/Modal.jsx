import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../store/modal/modal-slice';
import classes from './Modal.module.css';

export default function Modal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const title = useSelector((state) => state.modal.title);
  const body = useSelector((state) => state.modal.body);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className={classes.backdrop}
        onClick={() => dispatch(closeModal())}
      />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className={classes.modal}
      >
        <h2>{title}</h2>
        <div>{body}</div>
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
