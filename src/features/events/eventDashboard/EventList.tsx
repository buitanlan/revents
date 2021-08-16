import EventListItem from './EventListItem';
import { Event } from '../../../models/event';


interface Props {
	events: Event[];
}
export default function EventList(props: Props) {
    return (
			<div>
				{props.events.map((event) => (
					<EventListItem
						event={event}
						key={event.id}
					/>
				))}
			</div>
		);
}