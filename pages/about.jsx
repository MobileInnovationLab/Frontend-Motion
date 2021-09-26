import Image from 'next/image';
import Head from 'next/head';

import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';
import DivisionBox from '../components/divisionBox';
import Footer from '../components/footer';
import TopButton from '../components/topButton';
import MemberResponsive from '../components/memberResponsive';
import MemberContainer from '../components/memberContainer';

import Slider from 'react-slick';

import styles from '../styles/pages/about.module.scss';
import { useEffect, useState } from 'react';
import API from '../api';

const titleUtama = 'About Us';

export default function About() {

	let dosen = {
		first: {
			name: 'Veronikha Effendy',
			division: 'Supervisor/Lecturer',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		second: {
			name: 'Shinta Yulia P',
			division: 'Supervisor/Lecturer',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		third: {
			name: 'Mira Kania S',
			division: 'Supervisor/Lecturer',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		fourth: {
			name: 'Dana Sulistyo',
			division: 'Supervisor/Lecturer',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		fifth: {
			name: 'Monterico Adrian',
			division: 'Supervisor/Lecturer',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		sixth: {
			name: 'Aristyo',
			division: 'Supervisor/Lecturer',
			linkedin: '',
			facebook: '',
			insta: ''
		}
	}

	let labAssist = {
		first: {
			name: 'Agus Adi Pranata',
			division: 'Laboratory Assistant',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		second: {
			name: 'Aisyah Fitri',
			division: 'Laboratory Assistant',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		third: {
			name: 'Nur Intan Sari',
			division: 'Laboratory Assistant',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		fourth: {
			name: 'Serly Setyani',
			division: 'Laboratory Assistant',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		fifth: {
			name: 'Salsabila Martono',
			division: 'Laboratory Assistant',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		sixth: {
			name: 'Andrea Rahmadanisya',
			division: 'Laboratory Assistant',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		seventh: {
			name: 'Dimas Imameza',
			division: 'Laboratory Assistant',
			linkedin: '',
			facebook: '',
			insta: ''
		},
		eight: {
			name: 'Antika Putri Permata Wardani',
			division: 'Laboratory Assistant',
			linkedin: '',
			facebook: '',
			insta: ''
		},
	}

	const logoIni = () => {
		return (
			<svg
				width='12'
				height='12'
				viewBox='0 0 12 12'
				fill='#858585'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='6' cy='6' r='6' />
			</svg>
		)
	}

	const responsiveLecturerSlider = {
		customPaging: logoIni,
		arrows: false,
		dots: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
	};

	const [members, setMembers] = useState(null);
	const [generation, setGeneration] = useState(null);
	const [selectedGeneration, setSelectedGeneration] = useState(0);

	useEffect(() => {
		const fetchApi = async () => {
			const [members, generation] = await Promise.all([
				API.getAllMember(),
				API.getGeneration(),
			]);
			setMembers(members.data);
			setGeneration(generation);
		};
		fetchApi();
	}, []);

	useEffect(() => {
		if (selectedGeneration == 0) {
			API.getAllMember().then((resp) => setMembers(resp.data));
		} else {
			API.getGenerationById(selectedGeneration).then((resp) => {
				setMembers(resp.member);
			});
		}
	}, [selectedGeneration]);

	return (
		<div className={styles['main-body']}>
			<Head>
				<title>About Us</title>
			</Head>
			<Navbar />

			<BigTitle>About Us</BigTitle>

			<section className={styles.first}>
				<div className={styles['first-title']}>
					<h1 className={styles.title}>
						We are Creative People with High Spirits
					</h1>
					<p className={styles.subtitle}>
						The Motion (Mobile Innovation) Laboratory is one of the research
						laboratories under the Faculty of Informatics, Telkom University.
						Motion Lab focuses on the creation and development of mobile software.
						Now Motion Lab comes with 3 division options, Business Analyst, UI/UX
						Design, and Mobile Programming.
					</p>
				</div>
				<section>
					<Image
						src='/about/first-meet.png'
						alt='Image of meeting'
					/>
				</section>
				<div className={styles['first-flex']}>
					<div className={styles.item}>
						<h4>6</h4>
						<p>Years of operation</p>
					</div>
					<div className={styles.item}>
						<h4>100+</h4>
						<p>Members</p>
					</div>
					<div className={styles.item}>
						<h4>50+</h4>
						<p>Products</p>
					</div>
					<div className={styles.item}>
						<h4>48</h4>
						<p>Awards</p>
					</div>
				</div>
			</section>

			<section className={styles.division}>
				<DivisionBox />
			</section>

			<section className={styles['about-member']}>
				<div className={styles.title}>
					<h1>Some People Who Innovated You</h1>
					<h4>LECTURER</h4>
				</div>

				<div className={`${styles.slider} ${'slider-mobile'}`}>
					<Slider {...responsiveLecturerSlider}>
						<div className={styles.containerRes}>
							<MemberContainer
								name={dosen.first.name}
								division={dosen.first.division}
								linkedin={dosen.first.linkedin}
								facebook={dosen.first.facebook}
								insta={dosen.first.insta}
							/>
							<MemberContainer
								name={dosen.second.name}
								division={dosen.second.division}
								linkedin={dosen.second.linkedin}
								facebook={dosen.second.facebook}
								insta={dosen.second.insta}
							/>
							<MemberContainer
								name={dosen.third.name}
								division={dosen.third.division}
								linkedin={dosen.third.linkedin}
								facebook={dosen.third.facebook}
								insta={dosen.third.insta}
							/>
							<MemberContainer
								name={dosen.fourth.name}
								division={dosen.fourth.division}
								linkedin={dosen.fourth.linkedin}
								facebook={dosen.fourth.facebook}
								insta={dosen.fourth.insta}
							/>
						</div>
						<div className={styles.containerRes}>
							<MemberContainer
								name={dosen.fifth.name}
								division={dosen.fifth.division}
								linkedin={dosen.fifth.linkedin}
								facebook={dosen.fifth.facebook}
								insta={dosen.fifth.insta}
							/>
							<MemberContainer
								name={dosen.sixth.name}
								division={dosen.sixth.division}
								linkedin={dosen.sixth.linkedin}
								facebook={dosen.sixth.facebook}
								insta={dosen.sixth.insta}
							/>
						</div>
					</Slider>
				</div>
				<div className={styles.grid}>
					<MemberContainer
						name={dosen.first.name}
						division={dosen.first.division}
						linkedin={dosen.first.linkedin}
						facebook={dosen.first.facebook}
						insta={dosen.first.insta}
					/>
					<MemberContainer
						name={dosen.second.name}
						division={dosen.second.division}
						linkedin={dosen.second.linkedin}
						facebook={dosen.second.facebook}
						insta={dosen.second.insta}
					/>
					<MemberContainer
						name={dosen.third.name}
						division={dosen.third.division}
						linkedin={dosen.third.linkedin}
						facebook={dosen.third.facebook}
						insta={dosen.third.insta}
					/>
					<MemberContainer
						name={dosen.fourth.name}
						division={dosen.fourth.division}
						linkedin={dosen.fourth.linkedin}
						facebook={dosen.fourth.facebook}
						insta={dosen.fourth.insta}
					/>
					<MemberContainer
						name={dosen.fifth.name}
						division={dosen.fifth.division}
						linkedin={dosen.fifth.linkedin}
						facebook={dosen.fifth.facebook}
						insta={dosen.fifth.insta}
					/>
					<MemberContainer
						name={dosen.sixth.name}
						division={dosen.sixth.division}
						linkedin={dosen.sixth.linkedin}
						facebook={dosen.sixth.facebook}
						insta={dosen.sixth.insta}
					/>
				</div>

				<div className={styles.title}>
					<hr />
					<div className={styles.flex}>
						<h4>LABORATORY ASSISTANT</h4>
						{/* <div className={styles.form}>
							<p>Generation: </p>
							<select>
								<option>none</option>
								<option>none</option>
							</select>
						</div> */}
					</div>
				</div>
				<div className={`${styles.slider} ${'slider-mobile'}`}>
					<Slider {...responsiveLecturerSlider}>
						<div className={styles.containerRes}>
							<MemberContainer
								name={labAssist.first.name}
								division={labAssist.first.division}
								linkedin={labAssist.first.linkedin}
								facebook={labAssist.first.facebook}
								insta={labAssist.first.insta}
							/>
							<MemberContainer
								name={labAssist.second.name}
								division={labAssist.second.division}
								linkedin={labAssist.second.linkedin}
								facebook={labAssist.second.facebook}
								insta={labAssist.second.insta}
							/>
							<MemberContainer
								name={labAssist.third.name}
								division={labAssist.third.division}
								linkedin={labAssist.third.linkedin}
								facebook={labAssist.third.facebook}
								insta={labAssist.third.insta}
							/>
							<MemberContainer
								name={labAssist.fourth.name}
								division={labAssist.fourth.division}
								linkedin={labAssist.fourth.linkedin}
								facebook={labAssist.fourth.facebook}
								insta={labAssist.fourth.insta}
							/>
						</div>
						<div className={styles.containerRes}>
							<MemberContainer
								name={labAssist.fifth.name}
								division={labAssist.fifth.division}
								linkedin={labAssist.fifth.linkedin}
								facebook={labAssist.fifth.facebook}
								insta={labAssist.fifth.insta}
							/>
							<MemberContainer
								name={labAssist.sixth.name}
								division={labAssist.sixth.division}
								linkedin={labAssist.sixth.linkedin}
								facebook={labAssist.sixth.facebook}
								insta={labAssist.sixth.insta}
							/>
							<MemberContainer
								name={labAssist.seventh.name}
								division={labAssist.seventh.division}
								linkedin={labAssist.seventh.linkedin}
								facebook={labAssist.seventh.facebook}
								insta={labAssist.seventh.insta}
							/>
							<MemberContainer
								name={labAssist.eight.name}
								division={labAssist.eight.division}
								linkedin={labAssist.eight.linkedin}
								facebook={labAssist.eight.facebook}
								insta={labAssist.eight.insta}
							/>
						</div>
					</Slider>
				</div>
				<div className={styles.grid}>
					<MemberContainer
						name={labAssist.first.name}
						division={labAssist.first.division}
						linkedin={labAssist.first.linkedin}
						facebook={labAssist.first.facebook}
						insta={labAssist.first.insta}
					/>
					<MemberContainer
						name={labAssist.second.name}
						division={labAssist.second.division}
						linkedin={labAssist.second.linkedin}
						facebook={labAssist.second.facebook}
						insta={labAssist.second.insta}
					/>
					<MemberContainer
						name={labAssist.third.name}
						division={labAssist.third.division}
						linkedin={labAssist.third.linkedin}
						facebook={labAssist.third.facebook}
						insta={labAssist.third.insta}
					/>
					<MemberContainer
						name={labAssist.fourth.name}
						division={labAssist.fourth.division}
						linkedin={labAssist.fourth.linkedin}
						facebook={labAssist.fourth.facebook}
						insta={labAssist.fourth.insta}
					/>
					<MemberContainer
						name={labAssist.fifth.name}
						division={labAssist.fifth.division}
						linkedin={labAssist.fifth.linkedin}
						facebook={labAssist.fifth.facebook}
						insta={labAssist.fifth.insta}
					/>
					<MemberContainer
						name={labAssist.sixth.name}
						division={labAssist.sixth.division}
						linkedin={labAssist.sixth.linkedin}
						facebook={labAssist.sixth.facebook}
						insta={labAssist.sixth.insta}
					/>
					<MemberContainer
						name={labAssist.seventh.name}
						division={labAssist.seventh.division}
						linkedin={labAssist.seventh.linkedin}
						facebook={labAssist.seventh.facebook}
						insta={labAssist.seventh.insta}
					/>
					<MemberContainer
						name={labAssist.eight.name}
						division={labAssist.eight.division}
						linkedin={labAssist.eight.linkedin}
						facebook={labAssist.eight.facebook}
						insta={labAssist.eight.insta}
					/>
				</div>

				<div className={styles.title}>
					<hr />
					<div className={styles.flex}>
						<h4>LABORATORY MEMBER</h4>
						<div className={styles.form}>
							<p>Generation: </p>
							<select
								value={selectedGeneration}
								onChange={(e) => {
									setSelectedGeneration(e.target.value);
								}}
							>
								<option value={0}>All</option>
								{generation?.map(({ name, id }) => (
									<option key={name} value={id}>
										{name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				{/* <div className={`${styles.slider} ${'slider-mobile'}`}>
					<Slider {...responsiveLecturerSlider}>
						<div>
							<MemberResponsive {...dosenContainer} />
						</div>
						<div>
							<MemberResponsive {...dosenContainer} />
						</div>
					</Slider>
				</div> */}
				<div className={styles.grid}>
					{members?.map((member) => (
						<MemberContainer
							key={member.id}
							name={member.name}
							division={member.division}
						/>
					))}
				</div>
			</section>

			<TopButton />

			<Footer />
		</div>
	);
}