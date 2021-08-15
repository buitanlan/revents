import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';

interface Props {
	setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NavBar(props: Props) {
    return (
			<Menu inverted fixed='top'>
				<Container>
					<MenuItem header>
						<img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
						Re-vents
					</MenuItem>
					<Menu name='Events' />
					<MenuItem>
						<Button onClick={() => props.setFormOpen(true)} positive inverted content='Create Event'></Button>
					</MenuItem>
					<MenuItem position='right'>
						<Button basic inverted content='Login'></Button>
						<Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
					</MenuItem>
				</Container>
			</Menu>
		);
}