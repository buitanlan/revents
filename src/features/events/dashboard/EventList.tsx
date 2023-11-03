import EventListItem from './EventListItem';
import { AppEvent } from '../../../app/types/appEvent';

type Props = {
  events: AppEvent[];
};
export default function EventList({ events }: Props) {
  return (
    <div>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </div>
  );
}
