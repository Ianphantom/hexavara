

import {
  ChartLine,
  Newspaper,
  DeviceMobile,
  HardDrives,
  MathOperations,
  UsersThree,
} from '@phosphor-icons/react';

export const dataService = [
  {
    id: 1,
    name: 'Digital Marketing',
    description:
      "Crafting tailored digital strategies to amplify your brand's online presence and drive meaningful engagement.",
    icon: <ChartLine size={24} color='#3182FF' weight='fill' />,
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Advertising',
    description:
      'Creating captivating campaigns that cut through the noise and connect your brand with your target audience.',
    icon: <Newspaper size={24} color='#3182FF' weight='fill' />,
    isFeatured: true,
  },
  {
    id: 3,
    name: 'UI/UX Design',
    description:
      'Elevating user experiences through intuitive and visually stunning designs that resonate with your audience.',
    icon: <DeviceMobile size={24} color='#3182FF' weight='fill' />,
    isFeatured: true,
  },
  {
    id: 4,
    name: 'Business Consultant',
    description:
      'Providing expert guidance to optimize operations, streamline processes, and achieve sustainable growth.',
    icon: <HardDrives size={24} color='#3182FF' weight='fill' />,
    isFeatured: true,
  },
  {
    id: 5,
    name: 'Accounting Consultant',
    description:
      'Navigating financial complexities with precision and insight, ensuring sound fiscal management for your business.',
    icon: <MathOperations size={24} color='#3182FF' weight='fill' />,
    isFeatured: false,
  },
  {
    id: 6,
    name: 'HR Consultant',
    description:
      'Empowering your team through strategic HR solutions that foster a thriving and cohesive workplace culture.',
    icon: <UsersThree size={24} color='#3182FF' weight='fill' />,
    isFeatured: false,
  },
];
