import { GroupTC } from 'app/schema/entities/GroupTC';
import { FieldConfig } from 'app/schema/definitions';
import { ContactID } from 'app/schema/types/Scalars';
import { groupCreate, CreateArgs } from 'app/vendor/group/groupCreate';
import { KeyValueInput } from '../types/inputs/KeyValueInput';
import { schemaComposer } from 'graphql-compose';

export const GroupCreateInput = schemaComposer.createInputTC({
  name: 'GroupCreateInput',
  fields: {
    title: 'String!',
    members: ContactID.List,
    parent: ContactID,
    avatar: `input GroupAvatarInput {
      """Group letters (2 symbols max)"""
      letters: String!

      """Hex color code"""
      color: String!
    }`,
    metadata: KeyValueInput.NonNull.List,
  },
});

export default {
  type: GroupTC,
  args: {
    group: GroupCreateInput.NonNull,
  },
  resolve: (_, args) => {
    return groupCreate(args);
  },
} as FieldConfig<CreateArgs>;