import {
  CodeBlock,
  ShieldStar,
  NewspaperClipping,
} from "@phosphor-icons/react";

export const dataServiceLandingPage = [
  {
    id: 1,
    name: "Software Development",
    description:
      "Elevate your digital presence with our software development services. We specialize in crafting bespoke solutions to your business needs, ensuring seamless functionality and user-centric experiences. Our expert team employs the latest technologies to deliver scalable, high-performance software that propels your business forward. ",
    icon: <CodeBlock size={24} color='#FFFFFF' weight='regular' />,
    listServicesItem: [
      "Web Development",
      "Mobile Apps Development",
      "Geographical Information System",
      "Internet of Things",
      "Enterprise Resource Planning",
      "Backoffice Management Services (Accounting, HRD, HSE, etc)",
    ],
    images: "https://3back.com/app/uploads/2017/07/Team-scaled.jpg",
  },
  {
    id: 2,
    name: "Startup & Incubator",
    description:
      "Navigate the complexities of startup success with our expert consultancy services. From ideation to execution, we offer strategic guidance to optimize your business model. With bunch of investor partner behind us we will help to accelerate growth of your startup. Make a collaboration with us to turn your entrepreneurial vision into reality.",
    icon: <ShieldStar size={24} color='#FFFFFF' weight='regular' />,
    listServicesItem: [
      "Coaching",
      "Investment",
      "Fundraising",
      "Seed & Development",
      "Partnership",
    ],
    images:
      "https://images.businessnewsdaily.com/app/uploads/2022/04/04074130/teamwork_g-stockstudio_getty.jpg",
  },
  {
    id: 3,
    name: "Managed Services",
    description:
      "Optimize your IT infrastructure with our comprehensive managed services. We provide comprehensive solutions, including proactive system monitoring, and strategic IT planning. Trust us to optimize your technology segment, ensuring most effective operations and allowing you to stay ahead in the digital landscape. ",
    icon: <NewspaperClipping size={24} color='#FFFFFF' weight='regular' />,
    listServicesItem: [
      "IT Outsourcing",
      "Maintenance",
      "Data Migration",
      "Configuration",
      "Training",
      "Gap Analysis",
      "IT Consultant",
    ],
    images:
      "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
  },
];
