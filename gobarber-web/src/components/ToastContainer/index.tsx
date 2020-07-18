import React from 'react';

import { useTransition } from 'react-spring';
import Toast from './Toast';
import { ToastMessage, useToast } from '../../hooks/Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: {
        right: '-120%',
      },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    }
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast message={item} key={key} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
