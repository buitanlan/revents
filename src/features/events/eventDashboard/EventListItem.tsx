import { Button, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, List, Segment, SegmentGroup } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Event } from '../../../models/event';

interface Props {
	event: Event;
}
export default function EventListItem(props: Props) {
    return (
			<SegmentGroup>
				<Segment>
					<ItemGroup>
						<Item>
							<ItemImage size='tiny' circular src={props.event.hostPhotoURL} />
								<ItemContent>
									<ItemHeader content={props.event.title}></ItemHeader>
								<ItemDescription>
									Hosted by {props.event.hostedBy}
								</ItemDescription>
							</ItemContent>
						</Item>
					</ItemGroup>
				</Segment>
				<Segment>
					<span>
						<Icon name='clock' /> {props.event.date}
						<Icon name='marker' /> {props.event.venue}
					</span>
				</Segment>
				<Segment secondary>
					<List horizontal>
						<EventListAttendee />
						<EventListAttendee />
						<EventListAttendee />
					</List>
            </Segment>
            <Segment clearing>
                <div> {props.event.description}</div>
                <Button color='teal' floated='right' content='View'></Button>
            </Segment>
			</SegmentGroup>
		);
}