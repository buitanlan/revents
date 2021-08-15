import { ChangeEvent, useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { Event } from '../../../models/event';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';


interface Props {
	setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
	selectedEvent: Event | undefined;
	createEvent: (event: Event) => void;
	updateEvent: (event: Event) => void;
}
export default function EventForm(props: Props) {
	const initialValues = props.selectedEvent ?? {
		title: '',
		category: '',
		description: '',
		city: '',
		venue: '',
		date: '',
	} as Event;

	const [values, setValues] = useState<Event>(initialValues);

	function handleFormSubmit() {
		props.selectedEvent
			? props.updateEvent({ ...props.selectedEvent, ...values })
			: props.createEvent({
					...values,
					id: uuidv4(),
					hostedBy: 'Bob',
					attendees: [],
					hostPhotoURL: '/assets/user.png',
			  });
		props.setFormOpen(false);
	}

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	}

	return (
		<Segment clearing>
			<Header content={props.selectedEvent ? 'Edit the event' : 'Create new event'} />
			<Form onSubmit={handleFormSubmit}>
				<Form.Field>
					<input
						type='text'
						placeholder='Event title'
						name='title'
						value={values.title}
						onChange={(e) => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Category'
						name='category'
						value={values.category}
						onChange={(e) => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Description'
						name='description'
						value={values.description}
						onChange={(e) => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='City'
						name='city'
						value={values.city}
						onChange={(e) => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Venue'
						name='venue'
						value={values.venue}
						onChange={(e) => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='date'
						placeholder='Date'
						name='date'
						value={values.date}
						onChange={(e) => handleInputChange(e)}
					/>
				</Form.Field>
				<Button type='submit' floated='right' positive content='Submit' />
				<Button
					as={Link} to='/event'
					type='submit'
					floated='right'
					content='Cancel'
				/>
			</Form>
		</Segment>
	);
}
