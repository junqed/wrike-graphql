import { spaceFindMany } from 'app/vendor/space/spaceFindMany';
import { SpaceTC } from 'app/schema/entities/SpaceTC';
import { FieldConfig } from 'app/schema/definitions';

export default {
  type: SpaceTC.NonNull.List,
  args: {
    filter: `input SpaceFindManyFilter { 
      withArchived: Boolean
      userIsMember: Boolean
    }`,
  },
  resolve: (_, args, context) => {
    return spaceFindMany(args, context);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig;
