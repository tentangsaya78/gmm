const globalSelectedOffice = ref<any>(null);

export const useCabang = () => {
  const selectedOffice = globalSelectedOffice;

  const offices = [
    {
      city: "Jakarta",
      office_type: "Head Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Jl. Lingkar Luar Barat No 9, Rawa Buaya, Cengkareng, Jakarta Barat 11740",
      phones: {
        mobile: ["0822 9999 9329"],
        landline: ["(021) 1500329"],
      },
      lat: -6.1697859,
      lng: 106.7342571,
    },
    {
      city: "Semarang",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Kawasan Pergudangan Diamond Cipta Niaga, Jl. Arteri Jl. Yos Sudarso No.A15, Bandarharjo, Semarang Utara, Kota Semarang, Jawa Tengah 50175",
      phones: {
        mobile: ["0811 1212 0566"],
        landline: ["(024) 86570705"],
      },
      lat: -6.99,
      lng: 110.422,
    },
    {
      city: "Makassar",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Jalan Perintis Kemerdekaan KM 16, Pai, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan (Depan Dealer Kalla Toyota)",
      phones: {
        mobile: ["0811 9001 0880"],
        landline: ["(0411) 2022008"],
      },
      lat: null,
      lng: null,
    },
    {
      city: "Balikpapan",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      addresses: [
        "Alamat 1: Jl. Mulawarman, RT. 041 No. 001, Manggar, Manggar Baru, Kec. Balikpapan Tim., Kota Balikpapan, Kalimantan Timur 76117",
        "Alamat 2: Jl. Soekarno Hatta KM 2,5 Batu Ampar, Balikpapan, Kalimantan Timur",
      ],
      phones: {
        mobile: ["0811 1212 0578"],
        landline: ["(0542) 7570808"],
      },
      lat: null,
      lng: null,
    },
    {
      city: "Samarinda",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Jl. Trikora Pergudangan Mangkuplas City, (Depan jembatan Mahkota 2) Blok D2",
      phones: {
        mobile: ["0811 1993 8508"],
        landline: [],
      },
      lat: null,
      lng: null,
    },
    {
      city: "Surabaya",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address: "Ruko Primkopal Jl. Raya Juanda No 3, Sedati, Sidoarjo",
      phones: {
        mobile: ["0811 1212 0579"],
      },
      lat: -7.3799,
      lng: 112.7863,
    },
    {
      city: "Banjarmasin",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Jl. A Yani KM 12,8 Gambut, Banjarmasin, Kab. Banjar, Kalimantan Selatan",
      phones: {
        mobile: ["0811 151 8203"],
        landline: ["(0511) 4220563"],
      },
      lat: -3.3645,
      lng: 114.6767,
    },
    {
      city: "Palembang",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Jalan HM. Noerdin Pandji No. 065 RT.76 RW.008 Kel. Sukajaya Kec. Sukarami Palembang Sumatera Selatan",
      phones: {
        mobile: ["0811 1920 1668"],
      },
      lat: -2.9346,
      lng: 104.6907,
    },
    {
      city: "Sorong",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Jl. Sorong Klamono Km.17 (Sorong Aimas, Klablim, Distrik Sorong Timur, Kabupaten Sorong, Papua Barat 98414)",
      phones: {
        mobile: ["0811 1220 0875"],
      },
      lat: -0.8853,
      lng: 131.3067,
    },
    {
      city: "Pontianak",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Ruko A. Yani Biss Park Jalan Arteri Supadio, No A1-A2 Kapuas, Sungai Raya, Kab. Kubu Raya – Kalimantan Barat",
      phones: {
        mobile: ["0811 1212 0557"],
      },
      lat: -0.0717,
      lng: 109.3712,
    },
    {
      city: "Palu",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address: "Palu",
      phones: {
        mobile: ["0811 1220 0869"],
      },
      lat: -0.8917,
      lng: 119.8707,
    },
    {
      city: "Padang",
      office_type: "FAW Motors",
      company_name: "PT Gayamakmur FAW Motors",
      address:
        "Ruko Petak 2 Jl. By Pass No.18-19, RT.01/RW.01, Sungai Sapih, Kec. Kuranji, Kota Padang, Sumatera Barat 25173 (Sebelah Aciak Mart)",
      phones: {
        mobile: ["0811 6669 913"],
      },
      lat: -0.8971,
      lng: 100.3958,
    },
    {
      city: "Pekanbaru",
      office_type: "FAW Motors",
      company_name: "PT Gayamakmur FAW Motors",
      address: "Jl. Raya Siak II No 189 KM. 10,5 Palas, Rumbai Pekanbaru",
      phones: {
        mobile: ["0812 6899 4267"],
      },
      lat: 0.5701,
      lng: 101.4478,
    },
    {
      city: "Medan",
      office_type: "FAW Motors",
      company_name: "PT Gayamakmur FAW Motors",
      address:
        "Jalan Raya Medan – Tanjung Morawa KM. 12 No. 88, Bangun, Tanjung Morawa, Medan 20362",
      phones: {
        mobile: ["0852 6210 7128"],
      },
      lat: 3.5074,
      lng: 98.7123,
    },
    {
      city: "Aceh",
      office_type: "FAW Motors",
      company_name: "PT Gayamakmur FAW Motors",
      address:
        "Jl. Dr. Mr. Mohd Hasan Lampeneurut Gampong, Kec. Darul Imarah, Kabupaten Aceh Besar, Aceh 23246 (Seberang Honda Arista)",
      phones: {
        mobile: ["0821 6845 9088"],
      },
      lat: 5.5136,
      lng: 95.3572,
    },
    {
      city: "Cirebon",
      office_type: "Partner",
      company_name: "PT Selecta Grage Jaya",
      address:
        "Jl. Kalijaga No.108, Pegambiran, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45113",
      phones: {
        landline: ["(0231) 203 313"],
      },
      lat: -6.7264,
      lng: 108.5686,
    },
    {
      city: "Bekasi",
      office_type: "Partner",
      company_name: "PT Mitra Inti Trada",
      address:
        "Taman Gardenia Timur Ruko Rose Garden 6 No.19, Grand Galaxy City, Bekasi Selatan, Jawa Barat 17147",
      phones: {
        mobile: ["0813 3078 3711"],
      },
      lat: -6.2846,
      lng: 106.9739,
    },
    {
      city: "Cilegon",
      office_type: "Partner",
      company_name: "PT Putra Galuh Persada",
      address:
        "Jl Raya Merak No 21, Rw.Arum, Kec. Grogol, Kota Cilegon, Banten 42436",
      phones: {
        landline: ["(0254) 8494 094"],
      },
      lat: -5.9981,
      lng: 106.0436,
    },
    {
      city: "Jayapura",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address: "Jayapura",
      phones: {
        mobile: ["0811 1993 8506"],
      },
      lat: -2.5916,
      lng: 140.6689,
    },
    {
      city: "Lampung",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Jl. Soekarno Hatta No.111, Labuhan Dalam, Kec. Tj. Senang, Kota Bandar Lampung, Lampung 35141",
      phones: {
        mobile: ["0811 8111 2177"],
      },
      lat: -5.3971,
      lng: 105.2668,
    },
    {
      city: "Timika",
      office_type: "Partner",
      company_name: "PT Putra Bintang Mimika",
      address:
        "Jl. Cendrawasih No.26 Kel. Timika Indah, Kec. Mimika Baru, Kabupaten Mimika, Papua 99910",
      phones: {
        mobile: ["0812 4088 8835"],
      },
      lat: -4.5537,
      lng: 136.8881,
    },
    {
      city: "Jambi",
      office_type: "Partner",
      company_name: "PT Mitra Perdana Mobil",
      address:
        "Jl. Lingkar Selatan III No 082 RT 031, Talang Bakung, Paal Merah, Jambi 36135",
      phones: {
        mobile: ["0812 7408 816"],
      },
      lat: -1.6356,
      lng: 103.6125,
    },
    {
      city: "Tuban",
      office_type: "Partner",
      company_name: "Rudal Motor",
      address:
        "Jl. Tuban – Babat No.122, Kuwu, Widang, Kec. Plumpang, Kabupaten Tuban, Jawa Timur 62382",
      phones: {
        mobile: ["0813 3078 3711"],
      },
      lat: -6.9022,
      lng: 112.0994,
    },
    {
      city: "Manado",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "di Citraland Miracle Walk 5 / 15 Winangun Manado, Sulawesi Utara Jalan Konsolidasi, Paniki Bawah, Kec. Mapanget, Kota Manado, Sulawesi Utara",
      phones: {
        mobile: ["0811 1220 0868"],
      },
      lat: 1.5175,
      lng: 124.9001,
    },
    {
      city: "Kendari",
      office_type: "Branch Office",
      company_name: "PT Gaya Makmur Mobil",
      address:
        "Jl. Laode Hadi, Bonggoeya, Kec. Wua-Wua, Kota Kendari, Sulawesi Tenggara 93118",
      phones: {
        mobile: ["0822 9088 6158", "0819 1234 1881"],
        landline: ["(0411) 341 5621"],
      },
      lat: -3.9889,
      lng: 122.5151,
    },
    {
      city: "Sebamban",
      office_type: "Service Center",
      company_name: "Service Center Gaya Makmur Mobil",
      address:
        "Jalan Ahmad Yani desa Mekar Jaya RT.04 RW.02 Kecamatan Angsana, Kabupaten Tanah Bumbu, Kalimantan Selatan",
      phones: {
        mobile: ["0813 4895 9357"],
      },
      lat: -3.7368,
      lng: 115.5532,
    },
    {
      city: "Melak",
      office_type: "Service Center",
      company_name: "Service Center Gaya Makmur Mobil",
      address:
        "Jl. Sultan Hasanudin RT 07 Kelurahan Simpang Raya, Kecamatan Barong Tongkok, Kabupaten Kutai Barat, Kalimantan Timur",
      phones: {
        mobile: ["0859 3024 9647"],
        landline: ["(041) 341 5621"],
      },
      lat: -0.3496,
      lng: 116.2057,
    },
    {
      city: "Karawang",
      office_type: "Partner",
      company_name: "PT Sinar Surya Motor",
      address:
        "Jalan Akses Tol Karawang Barat I, Wadas, Telukjambe Timur, Karawang, Jawa Barat 41361",
      phones: {},
      lat: -6.3638,
      lng: 107.3051,
    },
    {
      city: "Kolaka",
      office_type: "Part & Service Center",
      company_name: "Gaya Makmur Mobil",
      address:
        "Desa Tolowe Ponre waru Dusun V, kec. Wolo, Kab. Kolaka, Provinsi Sulawesi Tenggara",
      phones: {
        mobile: ["0811 1220 0873"],
      },
      lat: -4.0407,
      lng: 121.6093,
    },
    {
      city: "Muara Teweh",
      office_type: "Part & Service Center",
      company_name: "Gaya Makmur Mobil",
      address:
        "Jl. Lintas Kalimantan Poros Tengah, Jingah, Kec. Teweh Tengah, Kabupaten Barito Utara, Kalimantan Tengah 73814",
      phones: {
        mobile: ["0812 5356 9613"],
      },
      lat: -0.9466,
      lng: 114.901,
    },
    {
      city: "Bayung Lencir",
      office_type: "Part Center & Service Center",
      company_name: "Gaya Makmur Mobil",
      address:
        "Jl. Lintas Palembang-Jambi KM189 RT. 06 Dusun II Desa Sindang Marga, Kec. Bayung Lencir Kab. Musi Banyuasin Provinsi Sumatera Selatan 30756",
      phones: {
        mobile: ["0811 1929 2703"],
      },
      lat: -2.1223,
      lng: 103.8659,
    },
    {
      city: "Probolinggo",
      office_type: "Part Center & Service Center",
      company_name: "Gaya Makmur Mobil",
      address:
        "Jalan Bromo, Kel. Triwung Lor, Kec. Kademangan, Kota Probolinggo, Jawa Timur",
      phones: {
        mobile: ["0811 1927 1116"],
      },
      lat: -7.7561,
      lng: 113.2056,
    },
  ];

  return {
    offices,
    selectedOffice,
  };
};
