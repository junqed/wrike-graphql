import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleID } from 'app/schema/types/Scalars';
import { WorkScheduleTC } from 'app/schema/entities/WorkScheduleTC';
import { workScheduleUpdate, UpdateArgs } from 'app/vendor/workSchedule/workScheduleUpdate';
import { WorkWeekInput } from 'app/schema/types/inputs/WorkWeekInput';

const WorkScheduleUpdateInput = WorkScheduleTC.schemaComposer.createInputTC({
  name: 'WorkScheduleUpdateInput',
  fields: {
    title: {
      type: 'String',
      description: 'Name of work schedule',
    },
    workweek: {
      type: WorkWeekInput.NonNull.List,
      description: 'Work week: working and non-working days',
    },
  },
});

export default {
  type: WorkScheduleTC,
  args: {
    id: WorkScheduleID.NonNull,
    workschedule: WorkScheduleUpdateInput.NonNull,
  },
  resolve: (_, args, context, info) => {
    return workScheduleUpdate({ ...args, info }, context);
  },
} as FieldConfig<UpdateArgs>;
