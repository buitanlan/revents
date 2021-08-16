import { useSelector } from 'react-redux';
import { Grid, GridColumn } from 'semantic-ui-react';
import { RootState } from '../../../app/store/configureStore';
import EventList from './EventList';

export default function EventDashboard() {
	const events  = useSelector((state: RootState) => state.event)

    return (
			<Grid>
				<GridColumn width={10}>
					<EventList
						events={events}
					/>
				</GridColumn>
				<GridColumn width={6}>
					<h1>Event Filters</h1>
				</GridColumn>
			</Grid>
		);
}