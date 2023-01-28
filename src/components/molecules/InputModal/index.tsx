import { Modal } from '@mantine/core';
import { Children } from 'react';
import { InputForm } from './inputForm';
import { Props as FormProps } from './inputForm';

type Props = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export const InputModal = ({ open, onClose, children }: Props) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      withCloseButton={false}
      exitTransitionDuration={500}
    >
      {children}
    </Modal>
  );
};
