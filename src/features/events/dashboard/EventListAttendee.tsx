import { Image, ListItem } from 'semantic-ui-react';
import { Attendee } from '../../../app/types/attendee';

type Props = {
  attendee: Attendee;
};
export default function EventListAttendee(props: Props) {
  return (
    <ListItem>
      <Image size="mini" circular src={props.attendee.photoURL} />
    </ListItem>
  );
}
