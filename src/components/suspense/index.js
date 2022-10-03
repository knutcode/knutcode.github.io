import { SkeletonHeader, SkeletonLogo, SkeletonScreen } from './styles';

export const Skeleton = () => {
	return (
		<>
			<SkeletonHeader>
				<SkeletonLogo>
					{`<`}
					<span>portfolio</span>
					{`/>`}
				</SkeletonLogo>
			</SkeletonHeader>
			<SkeletonScreen>{/* <h1>loading...</h1> */}</SkeletonScreen>
		</>
	);
};
