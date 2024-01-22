import sistemManagementRSIcon from "../assets/images/sistem-manajemen-rs-icon.png";
import sistemKeuanganDanKoperasi from "../assets/images/sistem-keuangan-dan-koperasi.png";
import enterpriseResourcePlanning from "../assets/images/enterprise-resource-planning.png";
import eGovernment from "../assets/images/e-government.png";
import sistemPengelolaanTokoOnline from "../assets/images/sistem-pengelolaan-toko-online.png";
import ruangTemu from "../assets/images/ruang-temu.png";
import inventoryManagementSystem from "../assets/images/inventory-management-system.png";
import systemPemesananJasa from "../assets/images/sistem-pemesanan-jasa.png";

export const dataService = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Development of web-based applications such as e-commerce, e-government, and company profiles.",
    icon: sistemManagementRSIcon,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Mobile Apps Development",
    description:
      "Mobile based application development on Android & iOS platforms",
    icon: sistemKeuanganDanKoperasi,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Digital Marketing",
    description:
      "Providing services for creating and managing digital marketing concepts and evaluating progress periodically.",
    icon: enterpriseResourcePlanning,
    isFeatured: true,
  },
  {
    id: 4,
    name: "GIS",
    description:
      "Development of an application system based on geographical data processing.",
    icon: eGovernment,
    isFeatured: true,
  },
  {
    id: 5,
    name: "Internet of Things",
    description:
      "System integration with electronic devices to capture and process data via the internet network.",
    icon: sistemPengelolaanTokoOnline,
    isFeatured: false,
  },
  {
    id: 6,
    name: "Accounting Software",
    description:
      "Software development for accounting recording activities into specific modules such as purchasing, sales, payroll, etc.",
    icon: ruangTemu,
    isFeatured: false,
  },
  {
    id: 7,
    name: "Advertising",
    description:
      "Providing client product/brand plan consultation services and ready to assist in the process of realizing advertising in physical or digital form.",
    icon: inventoryManagementSystem,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Enterprise Resource Planning",
    description:
      "Software development for planning and managing integrated company resources",
    icon: systemPemesananJasa,
    isFeatured: false,
  },
];
