import { Menu, Button } from 'semantic-ui-react';

interface Props {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SignedOutMenu(props: Props) {
	return (
		<Menu.Item position='right'>
			<Button onClick={() => props.setAuthenticated(true)} basic inverted content='Login' />
			<Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
		</Menu.Item>
	);
}
