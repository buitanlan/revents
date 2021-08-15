import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';
import { History } from 'history';


interface Props {
    history: History<unknown>;
}
export default function HomePage(props: Props) {
	return (
		<Segment inverted textAlign='center' vertical className='masthead'>
			<Container>
				<Header as='h1' inverted>
					<Image size='massive' src='/assets/logo.png' style={{ marginBottom: 12 }} />
					Re-vents
				</Header>
				<Button onClick={() => props.history.push('/events')} size='huge' inverted>
					Get started
					<Icon name='arrow right' inverted />
				</Button>
			</Container>
		</Segment>
	);
}
