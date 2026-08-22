import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

import classes from '../BlogStatusMessage/StatusMessage.module.css';

const WorkStatusMessage = () => {
  const { error, successMessage } = useSelector((state) => state.work);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (error) {
      addMessage({
        type: 'error',
        text: error,
      });
    }

    if (successMessage) {
      addMessage({
        type: 'success',
        text: successMessage,
      });
    }
  }, [error, successMessage]);

  const addMessage = (message) => {
    const newMessage = {
      ...message,
      id: Date.now() + Math.random(),
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ]);

    setTimeout(() => {
      removeMessage(newMessage.id);
    }, 2000);
  };

  const removeMessage = (id) => {
    setMessages((prevMessages) =>
      prevMessages.filter(
        (message) => message.id !== id
      )
    );
  };

  const handleRemove = (id) => {
    removeMessage(id);
  };

  return (
    <div className={classes.statusMessageContainer}>
      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            className={
              message.type === 'error'
                ? classes.error
                : classes.success
            }
            initial={{
              x: '100vw',
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: '100vw',
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {message.type === 'error' ? (
              <MdError />
            ) : (
              <FaCheck />
            )}

            <p>{message.text}</p>

            <span
              className={classes.closeBtn}
              onClick={() =>
                handleRemove(message.id)
              }
            >
              <IoMdClose />
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default WorkStatusMessage;