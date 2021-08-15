import { ListItem, Image } from 'semantic-ui-react';
import { Attendee } from '../../../models/attendee';

interface Props{
    attendee: Attendee;
}
export default function EventListAttendee(props: Props) {
    return (
        <ListItem>
            <Image size='mini' circular src={props.attendee.photoURL} />
        </ListItem>
    );
}
