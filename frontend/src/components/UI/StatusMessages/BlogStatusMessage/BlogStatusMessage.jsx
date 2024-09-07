import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './StatusMessage.module.css';

const StatusMessage = () => {
  const { loading, error, successMessage } = useSelector((state) => state.blog);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (error) {
      addMessage({ type: 'error', text: error });
    }

    if (successMessage) {
      addMessage({ type: 'success', text: successMessage });
    }
  }, [error, successMessage]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);

    setTimeout(() => {
      removeMessage(message);
    }, 2000);
  };

  const removeMessage = (messageToRemove) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message === messageToRemove ? { ...message, exiting: true } : message
      )
    );
  };

  const handleRemove = (index) => {
    setMessages((prevMessages) =>
      prevMessages.map((message, i) =>
        i === index ? { ...message, exiting: true } : message
      )
    );
  };

  return (
    <div className={classes.statusMessageContainer}>
      <AnimatePresence>
        {messages.map(
          (message, index) =>
            !message.exiting && (
              <motion.div
                key={index}
                className={
                  message.type === 'error' ? classes.error : classes.success
                }
                initial={{ x: '100vw', opacity: 0 }} // Sağdan girme animasyonu
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100vw', opacity: 0 }} // Soldan çıkma animasyonu
                transition={{ duration: 0.5 }}
              >
                {message.type === 'error' ? <MdError /> : <FaCheck />}
                <p>{message.text}</p>
                <span
                  className={classes.closeBtn}
                  onClick={() => handleRemove(index)}
                >
                  <IoMdClose />
                </span>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default StatusMessage;
