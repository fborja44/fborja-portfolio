import PageLayout from '../components/PageLayout/PageLayout';
import StyledLink from '../components/StyledLink/StyledLink';

const Contact = () => {
	return (
		<PageLayout title='Contact'>
			<div className='py-8'>
				If you would to reach out to me, let's connect on LinkedIn!{' '}
				<StyledLink href='https://www.linkedin.com/in/francis-borja-ab05aa188/'>
					You can view my profile here.
				</StyledLink>
			</div>
		</PageLayout>
	);
};

export default Contact;
