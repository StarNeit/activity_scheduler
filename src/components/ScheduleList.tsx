import React from 'react';
import { Button } from '@material-tailwind/react';
import { Schedule } from '@types';
import dayjs from 'dayjs';

type Props = {
  onDelete: (id: string) => void;
  onEdit: (schedule: Schedule) => void;
  schedules: Schedule[];
};

export const ScheduleList: React.FC<Props> = ({
  onDelete,
  onEdit,
  schedules
}) => {
  const sortByDate = (values: Schedule[]): Schedule[] => {
    return values.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  };

  return (
    <>
      {schedules.length ? (
        sortByDate(schedules).map((schedule, index) => (
          <div className="border-b border-b-gray-300 py-6 text-sm" key={index}>
            <div className="flex justify-between items-center py-1">
              <span className="font-semibold">Type</span>
              <span>{schedule.type}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-semibold">Date</span>
              <span>{dayjs(schedule.date).format('DD MMM YYYY HH:mm')}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-semibold">Username</span>
              <span>{schedule.user}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-semibold">Pitch</span>
              <span>{schedule.pitch}</span>
            </div>
            <div className="flex justify-end gap-4 pt-5">
              <Button className="py-2 px-3" onClick={() => onEdit(schedule)}>
                Edit
              </Button>
              <Button
                className="py-2 px-3"
                color="red"
                onClick={() => onDelete(schedule.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-20 text-gray-600">
          No activity schedules
        </div>
      )}
    </>
  );
};
