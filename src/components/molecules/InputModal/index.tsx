import { Modal } from '@mantine/core';
import { FormData, InputForm } from './inputForm';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: ({ date, money, item }?: FormData) => void;
  selectedDate: Date;
  onCancel?: () => void;
};

export const InputModal = ({
  open,
  onClose,
  onSubmit,
  onCancel,
  selectedDate,
}: Props) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      withCloseButton={false}
      exitTransitionDuration={500}
    >
      <InputForm
        onSubmit={onSubmit}
        onCancel={onCancel}
        selectedDate={selectedDate}
      />
    </Modal>
  );
};
