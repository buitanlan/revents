import EventListItem from './EventListItem';
import { Event } from '../../../models/event';


interface Props {
	events: Event[];
	selectEvent: (event: Event | undefined) => void;
	deleteEvent: (id: string) => void;
}
export default function EventList(props: Props) {
    return (
			<div>
				{props.events.map((event) => (
					<EventListItem
						event={event}
						key={event.id}
						selectEvent={props.selectEvent}
						deleteEvent={props.deleteEvent}
					/>
				))}
			</div>
		);
}