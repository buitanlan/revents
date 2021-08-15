import { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sampleData';
import { Event } from '../../../models/event';
import EventList from './EventList';

export default function EventDashboard() {
	const [events, setEvents] = useState<Event[]>(sampleData);


	function handleDeleteEvent(eventId: string) {
		setEvents(events.filter((evt) => evt.id !== eventId));
	}
    return (
			<Grid>
				<GridColumn width={10}>
					<EventList
						events={events}
						deleteEvent={handleDeleteEvent}
					/>
				</GridColumn>
				<GridColumn width={6}>
					<h1>Event Filters</h1>
				</GridColumn>
			</Grid>
		);
}