import Me from '../../assets/img/me.jpg';

const Avatar = () => {
	return (
		<div className='mr-6 box-content bg-gradient-to-br from-cyan-500 from-10% via-indigo-500 to-pink-500 to-90% rounded-full p-1 -z-10'>
			<img src={Me} className='h-56 w-56 rounded-full profile-shadow -z-10' />
		</div>
	);
};

export default Avatar;
