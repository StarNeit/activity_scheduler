import React from 'react';
import { Button } from '@material-tailwind/react';
import { Schedule } from '@types';
import dayjs from 'dayjs';
import clsx from 'clsx';

const TABLE_HEAD = ['Type', 'Date', 'Username', 'Pitch', ''];

type Props = {
  onDelete: (id: string) => void;
  onEdit: (schedule: Schedule) => void;
  schedules: Schedule[];
};

export const ScheduleTable: React.FC<Props> = ({
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
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {TABLE_HEAD.map((head, index) => (
            <th
              key={head}
              className={clsx(
                'border-b border-b-gray-300 p-4',
                index === TABLE_HEAD.length - 1 && 'w-[200px]'
              )}>
              <p className="font-semibold leading-none">{head}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {schedules.length ? (
          sortByDate(schedules).map((schedule, index) => (
            <tr key={index}>
              <td className="p-4">
                <p>{schedule.type}</p>
              </td>
              <td className="p-4">
                <p>{dayjs(schedule.date).format('DD MMM YYYY HH:mm')}</p>
              </td>
              <td className="p-4">
                <p>{schedule.user}</p>
              </td>
              <td className="p-4">
                <p>{schedule.pitch}</p>
              </td>
              <td className="flex justify-center p-4">
                <div className="flex gap-4">
                  <Button
                    className="py-2 px-3"
                    onClick={() => onEdit(schedule)}>
                    Edit
                  </Button>
                  <Button
                    className="py-2 px-3"
                    color="red"
                    onClick={() => onDelete(schedule.id)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>
              <div className="text-center py-20 text-gray-600">
                No activity schedules
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
