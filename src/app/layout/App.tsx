import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

export default function App() {

	const [formOpen, setFormOpen] = useState(false);
  	return (
		<div>
			<NavBar setFormOpen={setFormOpen}/>
			<Container style={{marginTop: '7em'}}>
				<EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
			</Container>
		</div>
	);
}
