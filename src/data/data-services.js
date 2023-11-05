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
      "Pengembangan aplikasi berbasis wep seperti e-commerce, e-government, dan company profile.",
    icon: sistemManagementRSIcon,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Mobile Apps Development",
    description:
      "Pengembangan aplikasi berbasis mobile pada platform Android & iOS,",
    icon: sistemKeuanganDanKoperasi,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Digital Marketing",
    description:
      "Memberikan layanan pembuatan dan pengelolaan konsep digital marketing hingga evaluasi progress secara berkala.",
    icon: enterpriseResourcePlanning,
    isFeatured: true,
  },
  {
    id: 4,
    name: "GIS",
    description:
      "Pengembangan sistem aplikasi berbasis pada pengolahan data geographical.",
    icon: eGovernment,
    isFeatured: true,
  },
  {
    id: 5,
    name: "Internet of Things",
    description:
      "Integrasi sistem dengan perangkat elektronik untuk menangkap dan mengolah data melalui jaringan internet.",
    icon: sistemPengelolaanTokoOnline,
    isFeatured: false,
  },
  {
    id: 6,
    name: "Accounting Software",
    description:
      "Pengembangan software untuk aktivitas pencatatan akuntansi ke dalam modul-modul spesifik seperti pembelian, penjualan, penggajian, dll.",
    icon: ruangTemu,
    isFeatured: false,
  },
  {
    id: 7,
    name: "Advertising",
    description:
      "Memberikan layanan konsultasi rencana produk/brand dari klien dan siap membantu dalam proses realisasi pengiklanan dalam bentuk fisik ataupun difital",
    icon: inventoryManagementSystem,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Enterprise Resource Planning",
    description:
      "Pengembangan perangkat lunak untuk perencanaan dan pengelolaan sumber daya perusahaan yang saling berintegrasi",
    icon: systemPemesananJasa,
    isFeatured: false,
  },
];
