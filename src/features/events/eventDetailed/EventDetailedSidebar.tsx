import { Segment, Item } from 'semantic-ui-react';
import { Attendee } from '../../../models/attendee';

interface Props {
	attendees: Attendee[] | undefined;
}
export default function EventDetailedSidebar(props: Props) {
	return (
		<>
			<Segment
				textAlign='center'
				style={{ border: 'none' }}
				attached='top'
				secondary
				inverted
				color='teal'
			>
				{props.attendees?.length ?? 0} {(props.attendees?.length ?? 0) > 1 ? 'People' : 'Person'}{' '}
				Going
			</Segment>
			<Segment attached>
				<Item.Group relaxed divided>
					{props.attendees?.map((attendee) => (
						<Item key={attendee.id} style={{ position: 'relative' }}>
							<Item.Image size='tiny' src={attendee.photoURL || '/assets/user.png'} />
							<Item.Content verticalAlign='middle'>
								<Item.Header as='h3'>
									<span>{attendee.displayName}</span>
								</Item.Header>
							</Item.Content>
						</Item>
					))}
				</Item.Group>
			</Segment>
		</>
	);
}
