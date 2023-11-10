import React from "react";
import styled from "styled-components";

// import images
import testimoniLogo from "../../assets/images/testimoni-icon.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const LandingPagesSectionEight = () => {
  return (
		<LandingPagesSectionEightStyled>
			<div className='title-container'>
				<div className='title display-medium text-center'>
					What they say about us
				</div>
			</div>
			<div className='testimonial-container'>
				<Swiper
					slidesPerView={4}
					centeredSlides={true}
					spaceBetween={30}
					loop={true}
					grabCursor={true}
					navigation={true}
					modules={[Navigation]}
					breakpoints={{
						220: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1000: {
							slidesPerView: 4,
							spaceBetween: 42,
						},
					}}
					className='mySwiper'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
						<SwiperSlide key={item}>
							<div className='testimoni'>
								<div className='desc paragraph-medium regular'>
									“We were already using Qolaq to covert our ilnessso it was a
									seamless transition between analysis and experimentation. It
									has certainly made things easier and more efficient for our
									teams.”
								</div>
								<div className='person'>
									<div className='left'>
										<div className='name-title paragraph-small regular'>
											<strong>David Guetta</strong> - Senior Marketing
										</div>
										<div className='position paragraph-small regular'>
											Manager st clubfox
										</div>
									</div>
									<div className='right'>
										<img src={testimoniLogo} alt='logo' />
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</LandingPagesSectionEightStyled>
	);
};

const LandingPagesSectionEightStyled = styled.div`
  padding: 60px 80px;
  .testimonial-container {
	margin-top: 40px;
	width: 100%;
	.testimoni {
	  padding: 32px 24px;
	  border-radius: 8px;
	  border: 1px solid var(--primary-40, #76acff);
	  display: flex;
	  flex-direction: column;
	  gap: 32px;
	  .person {
		display: flex;
		align-items: center;
		justify-content: space-between;
	  }
	}
  }
`;

export default LandingPagesSectionEight;
