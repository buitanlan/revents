import { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sampleData';
import { Event } from '../../../models/event';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';

interface Props {
	formOpen: boolean;
	setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function EventDashboard(props: Props) {
	const [events, setEvents] = useState<Event[]>(sampleData);
	//const [formEvent, setFormEvent] = useState(false);
    return (
			<Grid>
				<GridColumn width={10}>
					<EventList events={events}/>
				</GridColumn>
				<GridColumn width={6}>
				{props.formOpen && <EventForm setFormOpen={props.setFormOpen}/>}
				</GridColumn>
			</Grid>
		);
}