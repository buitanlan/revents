import { ChangeEvent, Component, useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { Event } from '../../../models/event';
import { v4 as uuidv4 } from 'uuid';
import { Link, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store/configureStore';
import { create, update } from '../eventSlice';



interface Props extends RouteComponentProps<{ id: string }>{
	history: History<unknown>;
}
export default function EventForm(props: Props) {
	const selectedEvent = useSelector((state: RootState) => state.event.find(event => event.id === props.match.params.id));
	const dispatch: AppDispatch = useDispatch();
	const initialValues = selectedEvent ?? {
		title: '',
		category: '',
		description: '',
		city: '',
		venue: '',
		date: '',
	} as Event;

	const [values, setValues] = useState<Event>(initialValues);

	function handleFormSubmit() {
		selectedEvent
		? dispatch(update({...selectedEvent, ...values }))
		: create({
			...values,
			id: uuidv4(),
			hostedBy: 'Bob',
			attendees: [],
			hostPhotoURL: '/assets/user.png',
		} as Event);
		props.history.push('/events');
	}

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	}

	return (
		<Segment clearing>
			<Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
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
