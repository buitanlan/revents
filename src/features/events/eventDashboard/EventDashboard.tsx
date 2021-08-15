import { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sampleData';
import { Event } from '../../../models/event';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';

interface Props {
	formOpen: boolean;
	setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
	selectEvent: (event: Event | undefined) => void;
	selectedEvent: Event | undefined;
}
export default function EventDashboard(props: Props) {
	const [events, setEvents] = useState<Event[]>(sampleData);

	function handleCreateEvent(event: Event): void {
		setEvents([...events, event]);
	}

	function handleUpdateEvent(updatedEvent: Event): void {
		setEvents(events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt)));
		props.selectEvent(undefined);
	}

	function handleDeleteEvent(eventId: string) {
		setEvents(events.filter((evt) => evt.id !== eventId));
	}
    return (
			<Grid>
				<GridColumn width={10}>
					<EventList
						events={events}
						selectEvent={props.selectEvent}
						deleteEvent={handleDeleteEvent}
					/>
				</GridColumn>
				<GridColumn width={6}>
					{props.formOpen && (
						<EventForm
							setFormOpen={props.setFormOpen}
							setEvents={setEvents}
							createEvent={handleCreateEvent}
							selectedEvent={props.selectedEvent}
							updateEvent={handleUpdateEvent}
							key={props.selectedEvent?.id}
						/>
					)}
				</GridColumn>
			</Grid>
		);
}