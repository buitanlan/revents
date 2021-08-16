import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/configureStore';
import { RouteComponentProps } from 'react-router-dom';

interface Params {
	id: string;
}
interface Props extends RouteComponentProps<Params>{}
export default function EventDetailedPage(props: Props) {
	const event = useSelector((state: RootState) => state.event.find(e => e.id === props.match.params.id));
	return (
		<Grid>
			<Grid.Column width={10}>
				<EventDetailedHeader event={event} />
				<EventDetailedInfo event={event} />
				<EventDetailedChat />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventDetailedSidebar attendees={event?.attendees} />
			</Grid.Column>
		</Grid>
	);
}
