import * as React from 'react';
import EditProfileForm from './EditProfileForm';
import BasicModal from './BasicModal';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditProfileModal({open, setOpen} : Props) {
  return (
    <BasicModal open={open} setOpen={setOpen} title='Edit profile'>
      <EditProfileForm setOpen={setOpen} />
    </BasicModal>
  );
}