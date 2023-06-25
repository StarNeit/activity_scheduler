import React, { useState, useMemo } from 'react';
import { Button } from '@material-tailwind/react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ScheduleFormDialog, ScheduleList, ScheduleTable } from '@components';
import { Schedule, PitchType } from '@types';
import { useAppStore } from '@stores';

const PITCH_OPTIONS = [
  PitchType.Pitch1,
  PitchType.Pitch2,
  PitchType.Pitch3,
  PitchType.Pitch4,
  PitchType.Pitch5
];

const Schedules = () => {
  const { schedules, createSchedule, editSchedule, deleteSchedule } =
    useAppStore();

  const [isOpenScheduleForm, setIsOpenScheduleForm] = useState(false);
  const [editableSchedule, setEditableSchedule] = useState<Schedule | null>(
    null
  );

  const availablePitches = useMemo(() => {
    const options = PITCH_OPTIONS.filter(
      (option) =>
        schedules.findIndex((schedule) => schedule.pitch === option) < 0
    );

    if (editableSchedule && editableSchedule.pitch) {
      options.push(editableSchedule.pitch);
    }

    return options;
  }, [schedules, editableSchedule]);

  const handleEditSchedule = (payload: Schedule) => {
    setEditableSchedule(payload);
    setIsOpenScheduleForm(true);
  };

  const handleSubmitSchedule = (payload: Schedule) => {
    if (editableSchedule) {
      editSchedule(payload);
    } else {
      createSchedule(payload);
    }
    handleCloseDialog();
  };

  const handleCloseDialog = () => {
    setEditableSchedule(null);
    setIsOpenScheduleForm(false);
  };

  return (
    <div className="pt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Schedules</h2>
        <Button
          className="flex items-center gap-2 py-2.5"
          onClick={() => setIsOpenScheduleForm(true)}>
          <PlusCircleIcon className="w-5 h-5" />
          Create
        </Button>
      </div>

      <div className="pt-5 hidden md:block">
        <ScheduleTable
          schedules={schedules}
          onEdit={handleEditSchedule}
          onDelete={deleteSchedule}
        />
      </div>
      <div className="pt-5 block md:hidden">
        <ScheduleList
          schedules={schedules}
          onEdit={handleEditSchedule}
          onDelete={deleteSchedule}
        />
      </div>

      {isOpenScheduleForm && (
        <ScheduleFormDialog
          schedule={editableSchedule}
          pitchOptions={availablePitches}
          isOpen={isOpenScheduleForm}
          onClose={handleCloseDialog}
          onSubmit={handleSubmitSchedule}
        />
      )}
    </div>
  );
};

export default Schedules;
