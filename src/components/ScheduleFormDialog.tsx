import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option
} from '@material-tailwind/react';
import { ActivityType, PitchType, Schedule } from '@types';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const ACTIVITY_OPTIONS = [
  ActivityType.Mowing,
  ActivityType.Fertilisation,
  ActivityType.Aeration,
  ActivityType.Irrigation
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  schedule: Schedule | null;
  onSubmit: (value: Schedule) => void;
  pitchOptions: PitchType[];
};

export const ScheduleFormDialog: React.FC<Props> = ({
  isOpen,
  onClose,
  schedule,
  onSubmit,
  pitchOptions
}) => {
  const {
    formState: { isValid },
    handleSubmit,
    control
  } = useForm<Schedule>({
    mode: 'onBlur',
    defaultValues: schedule ?? {
      id: uuidv4(),
      type: null,
      user: '',
      pitch: null,
      date: dayjs().format('YYYY-MM-DDTHH:mm')
    }
  });

  const submit = (values: Schedule) => {
    onSubmit(values);
  };

  return (
    <Dialog open={isOpen} handler={onClose}>
      <DialogHeader>
        {schedule ? 'Edit Schedule' : 'Create New Schedule'}
      </DialogHeader>
      <form className="w-full px-4" onSubmit={handleSubmit(submit)}>
        <DialogBody divider>
          <div className="mb-4 flex flex-col gap-8 py-2">
            <Controller
              control={control}
              name="type"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Select
                  label="Activity Type"
                  value={value as string}
                  onChange={(type) => onChange(type as ActivityType)}>
                  {ACTIVITY_OPTIONS.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              )}
            />

            <Controller
              control={control}
              name="date"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Date"
                  type="datetime-local"
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="user"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input label="Username" onChange={onChange} value={value} />
              )}
            />

            <Controller
              control={control}
              name="pitch"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Select
                  label="Pitch"
                  value={value as string}
                  onChange={(type) => onChange(type as PitchType)}>
                  {pitchOptions.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" onClick={onClose} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button type="submit" disabled={!isValid}>
            <span>{schedule ? 'Update' : 'Create'}</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};
