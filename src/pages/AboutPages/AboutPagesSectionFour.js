import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import WorkPagesTagButtonComponent from '../WorkPages/WorkPagesTagButtonComponent';
// import ButtonComponent from '../../components/ButtonComponent';
// import { ArrowUpRight } from '@phosphor-icons/react';

const AboutPagesSectionFour = () => {
  const [tagActive, setTagActive] = useState('KSO');
  console.log(tagActive);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutPagesSectionFourStyled>
      <div className='container'>
        <div className='title text-center display-small'>
          Our General Work Scheme
        </div>
        <div className='tag-container'>
          {/* TODO this feature is disabled on V1 */}

          {/* <WorkPagesTagButtonComponent
						text='KSO'
						tagActive={tagActive}
						setTagActive={setTagActive}
					/> */}
          <WorkPagesTagButtonComponent
            text='Software Development'
            tagActive={tagActive}
            setTagActive={setTagActive}
          />
          {/* TODO this feature is disabled on V1 */}
          {/* <WorkPagesTagButtonComponent
				text='IT Security'
				tagActive={tagActive}
				setTagActive={setTagActive}
			/> */}
        </div>
        <div className='step-container'>
          <div className='step-item' data-aos='fade-right'>
            <div className='step-number paragraph-medium'>
              <div>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M25 4H23V3C23 2.73478 22.8946 2.48043 22.7071 2.29289C22.5196 2.10536 22.2652 2 22 2C21.7348 2 21.4804 2.10536 21.2929 2.29289C21.1054 2.48043 21 2.73478 21 3V4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H11V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V4H7C6.46957 4 5.96086 4.21071 5.58579 4.58579C5.21071 4.96086 5 5.46957 5 6V25C5 26.0609 5.42143 27.0783 6.17157 27.8284C6.92172 28.5786 7.93913 29 9 29H23C24.0609 29 25.0783 28.5786 25.8284 27.8284C26.5786 27.0783 27 26.0609 27 25V6C27 5.46957 26.7893 4.96086 26.4142 4.58579C26.0391 4.21071 25.5304 4 25 4ZM20 21H12C11.7348 21 11.4804 20.8946 11.2929 20.7071C11.1054 20.5196 11 20.2652 11 20C11 19.7348 11.1054 19.4804 11.2929 19.2929C11.4804 19.1054 11.7348 19 12 19H20C20.2652 19 20.5196 19.1054 20.7071 19.2929C20.8946 19.4804 21 19.7348 21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21ZM20 17H12C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15H20C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16C21 16.2652 20.8946 16.5196 20.7071 16.7071C20.5196 16.8946 20.2652 17 20 17Z'
                    fill='#3182FF'
                  />
                </svg>
              </div>
              <div>Step 1</div>
            </div>
            <div className='step-title paragraph-large'>
              Requirement Gathering
            </div>
            <div className='step-desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </div>
          </div>
          <div className='arrow' data-aos='fade-right' data-aos-delay='100'>
            <svg
              width='27'
              height='23'
              viewBox='0 0 27 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 11.7422C1.78395 11.6956 3.58788 11.5929 4.53194 11.5547M25.7145 11.2885C25.7145 11.2885 24.5046 10.5197 16.7791 11.0182L25.7145 11.2885ZM25.7145 11.2885C23.5093 12.6206 21.1851 13.6688 18.939 14.9118L25.7145 11.2885ZM25.7145 11.2885C23.6653 10.1391 21.7671 8.75535 19.9051 7.3262L25.7145 11.2885ZM12.3912 11.1536C11.3688 11.1487 10.243 11.162 9.16551 11.2686L12.3912 11.1536Z'
                stroke='#102B55'
                strokeWidth='2'
                strokeMiterlimit='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>

          <div className='step-item' data-aos='fade-right' data-aos-delay='200'>
            <div className='step-number paragraph-medium'>
              <div>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_337_1111)'>
                    <path
                      d='M29 8V6C29 5.46957 28.7893 4.96086 28.4142 4.58579C28.0391 4.21071 27.5304 4 27 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V8C3 8.53043 3.21071 9.03914 3.58579 9.41421C3.96086 9.78929 4.46957 10 5 10V22H4C3.73478 22 3.48043 22.1054 3.29289 22.2929C3.10536 22.4804 3 22.7348 3 23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24H15V26.1725C14.3328 26.4084 13.7704 26.8726 13.4124 27.483C13.0543 28.0934 12.9235 28.8107 13.0432 29.5082C13.1629 30.2057 13.5253 30.8385 14.0663 31.2946C14.6074 31.7507 15.2923 32.0009 16 32.0009C16.7077 32.0009 17.3926 31.7507 17.9337 31.2946C18.4747 30.8385 18.8371 30.2057 18.9568 29.5082C19.0765 28.8107 18.9457 28.0934 18.5876 27.483C18.2296 26.8726 17.6672 26.4084 17 26.1725V24H28C28.2652 24 28.5196 23.8946 28.7071 23.7071C28.8946 23.5196 29 23.2652 29 23C29 22.7348 28.8946 22.4804 28.7071 22.2929C28.5196 22.1054 28.2652 22 28 22H27V10C27.5304 10 28.0391 9.78929 28.4142 9.41421C28.7893 9.03914 29 8.53043 29 8ZM13 18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16V18ZM16 30C15.8022 30 15.6089 29.9414 15.4444 29.8315C15.28 29.7216 15.1518 29.5654 15.0761 29.3827C15.0004 29.2 14.9806 28.9989 15.0192 28.8049C15.0578 28.6109 15.153 28.4327 15.2929 28.2929C15.4327 28.153 15.6109 28.0578 15.8049 28.0192C15.9989 27.9806 16.2 28.0004 16.3827 28.0761C16.5654 28.1518 16.7216 28.28 16.8315 28.4444C16.9414 28.6089 17 28.8022 17 29C17 29.2652 16.8946 29.5196 16.7071 29.7071C16.5196 29.8946 16.2652 30 16 30ZM17 18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19C15.7348 19 15.4804 18.8946 15.2929 18.7071C15.1054 18.5196 15 18.2652 15 18V15C15 14.7348 15.1054 14.4804 15.2929 14.2929C15.4804 14.1054 15.7348 14 16 14C16.2652 14 16.5196 14.1054 16.7071 14.2929C16.8946 14.4804 17 14.7348 17 15V18ZM21 18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19C19.7348 19 19.4804 18.8946 19.2929 18.7071C19.1054 18.5196 19 18.2652 19 18V14C19 13.7348 19.1054 13.4804 19.2929 13.2929C19.4804 13.1054 19.7348 13 20 13C20.2652 13 20.5196 13.1054 20.7071 13.2929C20.8946 13.4804 21 13.7348 21 14V18ZM5 8V6H27V8H5Z'
                      fill='#3182FF'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_337_1111'>
                      <rect width='32' height='32' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>Step 2</div>
            </div>
            <div className='step-title paragraph-large'>Problem Analysis</div>
            <div className='step-desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </div>
          </div>
          <div className='arrow' data-aos='fade-right' data-aos-delay='300'>
            <svg
              width='27'
              height='23'
              viewBox='0 0 27 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 11.7422C1.78395 11.6956 3.58788 11.5929 4.53194 11.5547M25.7145 11.2885C25.7145 11.2885 24.5046 10.5197 16.7791 11.0182L25.7145 11.2885ZM25.7145 11.2885C23.5093 12.6206 21.1851 13.6688 18.939 14.9118L25.7145 11.2885ZM25.7145 11.2885C23.6653 10.1391 21.7671 8.75535 19.9051 7.3262L25.7145 11.2885ZM12.3912 11.1536C11.3688 11.1487 10.243 11.162 9.16551 11.2686L12.3912 11.1536Z'
                stroke='#102B55'
                strokeWidth='2'
                strokeMiterlimit='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='step-item' data-aos='fade-right' data-aos-delay='400'>
            <div className='step-number paragraph-medium'>
              <div>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19 12V10H18C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12V20C16 20.5304 16.2107 21.0391 16.5858 21.4142C16.9609 21.7893 17.4696 22 18 22H19V20C19 19.4696 19.2107 18.9609 19.5858 18.5858C19.9609 18.2107 20.4696 18 21 18H27C27.5304 18 28.0391 18.2107 28.4142 18.5858C28.7893 18.9609 29 19.4696 29 20V26C29 26.5304 28.7893 27.0391 28.4142 27.4142C28.0391 27.7893 27.5304 28 27 28H21C20.4696 28 19.9609 27.7893 19.5858 27.4142C19.2107 27.0391 19 26.5304 19 26V24H18C16.9391 24 15.9217 23.5786 15.1716 22.8284C14.4214 22.0783 14 21.0609 14 20V17H10V18C10 18.5304 9.78929 19.0391 9.41421 19.4142C9.03914 19.7893 8.53043 20 8 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V14C2 13.4696 2.21071 12.9609 2.58579 12.5858C2.96086 12.2107 3.46957 12 4 12H8C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14V15H14V12C14 10.9391 14.4214 9.92172 15.1716 9.17157C15.9217 8.42143 16.9391 8 18 8H19V6C19 5.46957 19.2107 4.96086 19.5858 4.58579C19.9609 4.21071 20.4696 4 21 4H27C27.5304 4 28.0391 4.21071 28.4142 4.58579C28.7893 4.96086 29 5.46957 29 6V12C29 12.5304 28.7893 13.0391 28.4142 13.4142C28.0391 13.7893 27.5304 14 27 14H21C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12Z'
                    fill='#3182FF'
                  />
                </svg>
              </div>
              <div>Step 3</div>
            </div>
            <div className='step-title paragraph-large'>Planning</div>
            <div className='step-desc paragraph-medium regular'>
              <div className='ul'>
                <div className='ul-item'>
                  <div className='li'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 12 12'
                      fill='none'>
                      <circle cx='6' cy='6' r='6' fill='#616161' />
                    </svg>
                  </div>
                  <div className='li-text paragraph-medium regular'>
                    Flow System
                  </div>
                </div>
                <div className='ul-item'>
                  <div className='li'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 12 12'
                      fill='none'>
                      <circle cx='6' cy='6' r='6' fill='#616161' />
                    </svg>
                  </div>
                  <div className='li-text paragraph-medium regular'>
                    Wireframing
                  </div>
                </div>
                <div className='ul-item'>
                  <div className='li'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 12 12'
                      fill='none'>
                      <circle cx='6' cy='6' r='6' fill='#616161' />
                    </svg>
                  </div>
                  <div className='li-text paragraph-medium regular'>
                    Arsitektur Sistem
                  </div>
                </div>
                <div className='ul-item'>
                  <div className='li'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 12 12'
                      fill='none'>
                      <circle cx='6' cy='6' r='6' fill='#616161' />
                    </svg>
                  </div>
                  <div className='li-text paragraph-medium regular'>
                    Dev. Technology
                  </div>
                </div>
                <div className='ul-item'>
                  <div className='li'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 12 12'
                      fill='none'>
                      <circle cx='6' cy='6' r='6' fill='#616161' />
                    </svg>
                  </div>
                  <div className='li-text paragraph-medium regular'>
                    Prototyping
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='arrow' data-aos='fade-right' data-aos-delay='500'>
            <svg
              width='27'
              height='23'
              viewBox='0 0 27 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 11.7422C1.78395 11.6956 3.58788 11.5929 4.53194 11.5547M25.7145 11.2885C25.7145 11.2885 24.5046 10.5197 16.7791 11.0182L25.7145 11.2885ZM25.7145 11.2885C23.5093 12.6206 21.1851 13.6688 18.939 14.9118L25.7145 11.2885ZM25.7145 11.2885C23.6653 10.1391 21.7671 8.75535 19.9051 7.3262L25.7145 11.2885ZM12.3912 11.1536C11.3688 11.1487 10.243 11.162 9.16551 11.2686L12.3912 11.1536Z'
                stroke='#102B55'
                strokeWidth='2'
                strokeMiterlimit='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='step-item' data-aos='fade-right' data-aos-delay='600'>
            <div className='step-number paragraph-medium'>
              <div>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M25 5H21C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H5V25C5 25.5304 5.21071 26.0391 5.58579 26.4142C5.96086 26.7893 6.46957 27 7 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0391 27 25.5304 27 25V7C27 6.46957 26.7893 5.96086 26.4142 5.58579C26.0391 5.21071 25.5304 5 25 5ZM13.2925 7.7075C13.1049 7.51986 12.9994 7.26536 12.9994 7C12.9994 6.73464 13.1049 6.48014 13.2925 6.2925C13.4801 6.10486 13.7346 5.99944 14 5.99944C14.2654 5.99944 14.5199 6.10486 14.7075 6.2925L17.7075 9.2925C17.8005 9.38537 17.8742 9.49566 17.9246 9.61706C17.9749 9.73846 18.0008 9.86858 18.0008 10C18.0008 10.1314 17.9749 10.2615 17.9246 10.3829C17.8742 10.5043 17.8005 10.6146 17.7075 10.7075L14.7075 13.7075C14.5199 13.8951 14.2654 14.0006 14 14.0006C13.7346 14.0006 13.4801 13.8951 13.2925 13.7075C13.1049 13.5199 12.9994 13.2654 12.9994 13C12.9994 12.7346 13.1049 12.4801 13.2925 12.2925L15.5863 10L13.2925 7.7075ZM5.2925 10.7075C5.19952 10.6146 5.12576 10.5043 5.07544 10.3829C5.02512 10.2615 4.99921 10.1314 4.99921 10C4.99921 9.86858 5.02512 9.73846 5.07544 9.61706C5.12576 9.49566 5.19952 9.38537 5.2925 9.2925L8.2925 6.2925C8.48014 6.10486 8.73464 5.99944 9 5.99944C9.26536 5.99944 9.51986 6.10486 9.7075 6.2925C9.89514 6.48014 10.0006 6.73464 10.0006 7C10.0006 7.26536 9.89514 7.51986 9.7075 7.7075L7.41375 10L9.7075 12.2925C9.89514 12.4801 10.0006 12.7346 10.0006 13C10.0006 13.2654 9.89514 13.5199 9.7075 13.7075C9.51986 13.8951 9.26536 14.0006 9 14.0006C8.73464 14.0006 8.48014 13.8951 8.2925 13.7075L5.2925 10.7075ZM25 25H7V17H19C19.5304 17 20.0391 16.7893 20.4142 16.4142C20.7893 16.0391 21 15.5304 21 15V7H25V25Z'
                    fill='#3182FF'
                  />
                </svg>
              </div>
              <div>Step 4</div>
            </div>
            <div className='step-title paragraph-large'>Developing</div>
            <div className='step-desc paragraph-medium regular'>
              <div className='ul'>
                <div className='ul-item'>
                  <div className='li'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 12 12'
                      fill='none'>
                      <circle cx='6' cy='6' r='6' fill='#616161' />
                    </svg>
                  </div>
                  <div className='li-text paragraph-medium regular'>
                    Sprint Plan
                  </div>
                </div>
                <div className='ul-item'>
                  <div className='li'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 12 12'
                      fill='none'>
                      <circle cx='6' cy='6' r='6' fill='#616161' />
                    </svg>
                  </div>
                  <div className='li-text paragraph-medium regular'>
                    Implementasi
                  </div>
                </div>
                <div className='ul-item'>
                  <div className='li'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 12 12'
                      fill='none'>
                      <circle cx='6' cy='6' r='6' fill='#616161' />
                    </svg>
                  </div>
                  <div className='li-text paragraph-medium regular'>
                    Usability Testing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TODO this feature is disabled on V1 */}
        {/* <div className='all-project text-center'>
					<ButtonComponent
						text='Read our deck'
						icon={<ArrowUpRight size={32}/>}
						className='button outlined-primary border-radius-4 pointer paragraph-large hover'></ButtonComponent>
				</div> */}
      </div>
    </AboutPagesSectionFourStyled>
  );
};

const AboutPagesSectionFourStyled = styled.div`
  padding: 80px 0px;
  background: var(--hxvr-neutral-40);
  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .tag-container {
      display: flex;
      align-items: center;
      gap: 12px;
      justify-content: center;
    }

    .step-container {
      display: flex;
      align-items: stretch;
      width: 100%;
      gap: 5px;
      .step-item {
        width: 25%;
        padding: 24px 24px;
        background: var(--hxvr-neutral-30);
        box-shadow: 0px 12px 24px -4px rgba(59, 65, 69, 0.08),
          0px 0px 12px -4px rgba(59, 65, 69, 0.08);
        .step-number {
          text-transform: uppercase;
          color: var(--primary-base);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .step-title {
          color: var(--hxvr-neutral-100);
          margin-bottom: 8px;
        }

        .step-desc {
          color: var(--hxvr-neutral-secondary);
          .ul {
            display: flex;
            flex-direction: column;
            gap: 8px;
            .ul-item {
              display: flex;
              align-items: center;
              gap: 12px;
              .li-text {
                color: var(--hxvr-neutral-100);
              }
            }
          }
        }
      }
    }
    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .all-project {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      .step-container {
        flex-direction: column;
        .arrow > svg {
          transform: rotate(90deg);
        }

        .step-item {
          width: 100%;
        }
      }
    }
  }
`;

export default AboutPagesSectionFour;
