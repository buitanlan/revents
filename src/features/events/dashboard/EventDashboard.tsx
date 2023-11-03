import { Grid, GridColumn } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/store/store';
import EventList from './EventList';

export default function EventDashboard() {
  const { events } = useAppSelector((state) => state.events);

  return (
    <Grid>
      <GridColumn width={10}>
        <EventList events={events} />
      </GridColumn>
      <GridColumn width={6}>
        <h1>Event Filters</h1>
      </GridColumn>
    </Grid>
  );
}
