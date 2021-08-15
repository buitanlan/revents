import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Event } from '../../models/event'

export default function App() {

	const [formOpen, setFormOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);

	function handleSelectEvent(event?: Event): void {
		setSelectedEvent(event);
		setFormOpen(true);
	}

	  function handleCreateFormOpen() {
			setSelectedEvent(undefined);
			setFormOpen(true);
		}
  	return (
			<div>
				<NavBar setFormOpen={handleCreateFormOpen} />
				<Container style={{ marginTop: '7em' }}>
					<EventDashboard
						formOpen={formOpen}
						setFormOpen={setFormOpen}
						selectEvent={handleSelectEvent}
						selectedEvent={selectedEvent}
					/>
				</Container>
			</div>
		);
}
