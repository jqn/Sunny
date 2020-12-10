const forecastData = [
  {
    dt: 1607536800,
    main: {
      temp: 279.62,
      feels_like: 275.48,
      temp_min: 279.62,
      temp_max: 284.66,
      pressure: 1021,
      sea_level: 1021,
      grnd_level: 842,
      humidity: 23,
      temp_kf: -5.04,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    clouds: {
      all: 3,
    },
    wind: {
      speed: 1.24,
      deg: 163,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-09 18:00:00',
  },
  {
    dt: 1607547600,
    main: {
      temp: 284.16,
      feels_like: 280.9,
      temp_min: 284.16,
      temp_max: 286.73,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 839,
      humidity: 23,
      temp_kf: -2.57,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    clouds: {
      all: 1,
    },
    wind: {
      speed: 0.36,
      deg: 273,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-09 21:00:00',
  },
  {
    dt: 1607558400,
    main: {
      temp: 280.44,
      feels_like: 276.71,
      temp_min: 280.44,
      temp_max: 280.82,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 837,
      humidity: 37,
      temp_kf: -0.38,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n',
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 1.39,
      deg: 310,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-10 00:00:00',
  },
  {
    dt: 1607569200,
    main: {
      temp: 279.22,
      feels_like: 275.35,
      temp_min: 279.22,
      temp_max: 279.26,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 836,
      humidity: 47,
      temp_kf: -0.04,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n',
      },
    ],
    clouds: {
      all: 28,
    },
    wind: {
      speed: 1.89,
      deg: 248,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-10 03:00:00',
  },
  {
    dt: 1607580000,
    main: {
      temp: 278.85,
      feels_like: 274.51,
      temp_min: 278.85,
      temp_max: 278.85,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 836,
      humidity: 48,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 59,
    },
    wind: {
      speed: 2.56,
      deg: 228,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-10 06:00:00',
  },
  {
    dt: 1607590800,
    main: {
      temp: 277.32,
      feels_like: 273.93,
      temp_min: 277.32,
      temp_max: 277.32,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 834,
      humidity: 51,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 62,
    },
    wind: {
      speed: 1.11,
      deg: 283,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-10 09:00:00',
  },
  {
    dt: 1607601600,
    main: {
      temp: 274.37,
      feels_like: 270.96,
      temp_min: 274.37,
      temp_max: 274.37,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 834,
      humidity: 63,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 81,
    },
    wind: {
      speed: 1.14,
      deg: 320,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-10 12:00:00',
  },
  {
    dt: 1607612400,
    main: {
      temp: 275.08,
      feels_like: 271.25,
      temp_min: 275.08,
      temp_max: 275.08,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 836,
      humidity: 69,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.04,
      deg: 0,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-10 15:00:00',
  },
  {
    dt: 1607623200,
    main: {
      temp: 277.28,
      feels_like: 273.33,
      temp_min: 277.28,
      temp_max: 277.28,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 835,
      humidity: 66,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.48,
      deg: 28,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-10 18:00:00',
  },
  {
    dt: 1607634000,
    main: {
      temp: 277.71,
      feels_like: 274.26,
      temp_min: 277.71,
      temp_max: 277.71,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 832,
      humidity: 65,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.81,
      deg: 49,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-10 21:00:00',
  },
  {
    dt: 1607644800,
    main: {
      temp: 276.13,
      feels_like: 272.47,
      temp_min: 276.13,
      temp_max: 276.13,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 833,
      humidity: 73,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.12,
      deg: 71,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-11 00:00:00',
  },
  {
    dt: 1607655600,
    main: {
      temp: 275.28,
      feels_like: 271.32,
      temp_min: 275.28,
      temp_max: 275.28,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 834,
      humidity: 79,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.6,
      deg: 75,
    },
    visibility: 10000,
    pop: 0.13,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-11 03:00:00',
  },
  {
    dt: 1607666400,
    main: {
      temp: 273.25,
      feels_like: 269.44,
      temp_min: 273.25,
      temp_max: 273.25,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 833,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.37,
      deg: 83,
    },
    visibility: 8847,
    pop: 0.36,
    snow: {
      '3h': 0.42,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-11 06:00:00',
  },
  {
    dt: 1607677200,
    main: {
      temp: 271.82,
      feels_like: 268.28,
      temp_min: 271.82,
      temp_max: 271.82,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 832,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.88,
      deg: 64,
    },
    visibility: 185,
    pop: 0.69,
    snow: {
      '3h': 0.82,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-11 09:00:00',
  },
  {
    dt: 1607688000,
    main: {
      temp: 271.55,
      feels_like: 267.98,
      temp_min: 271.55,
      temp_max: 271.55,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 832,
      humidity: 98,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.89,
      deg: 63,
    },
    visibility: 134,
    pop: 0.91,
    snow: {
      '3h': 1.07,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-11 12:00:00',
  },
  {
    dt: 1607698800,
    main: {
      temp: 270.87,
      feels_like: 266.77,
      temp_min: 270.87,
      temp_max: 270.87,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 832,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 601,
        main: 'Snow',
        description: 'snow',
        icon: '13d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.51,
      deg: 83,
    },
    visibility: 131,
    pop: 0.95,
    snow: {
      '3h': 1.59,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-11 15:00:00',
  },
  {
    dt: 1607709600,
    main: {
      temp: 271.32,
      feels_like: 267.03,
      temp_min: 271.32,
      temp_max: 271.32,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 831,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.85,
      deg: 81,
    },
    visibility: 175,
    pop: 0.9,
    snow: {
      '3h': 1.36,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-11 18:00:00',
  },
  {
    dt: 1607720400,
    main: {
      temp: 271.9,
      feels_like: 268.03,
      temp_min: 271.9,
      temp_max: 271.9,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 830,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.31,
      deg: 65,
    },
    visibility: 2215,
    pop: 0.74,
    snow: {
      '3h': 0.61,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-11 21:00:00',
  },
  {
    dt: 1607731200,
    main: {
      temp: 270.86,
      feels_like: 266.93,
      temp_min: 270.86,
      temp_max: 270.86,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 832,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.21,
      deg: 59,
    },
    visibility: 4275,
    pop: 0.71,
    snow: {
      '3h': 0.21,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-12 00:00:00',
  },
  {
    dt: 1607742000,
    main: {
      temp: 269.92,
      feels_like: 266.27,
      temp_min: 269.92,
      temp_max: 269.92,
      pressure: 1019,
      sea_level: 1019,
      grnd_level: 834,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 1.7,
      deg: 73,
    },
    visibility: 393,
    pop: 0.65,
    snow: {
      '3h': 0.55,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-12 03:00:00',
  },
  {
    dt: 1607752800,
    main: {
      temp: 269.25,
      feels_like: 266.06,
      temp_min: 269.25,
      temp_max: 269.25,
      pressure: 1020,
      sea_level: 1020,
      grnd_level: 834,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 0.94,
      deg: 46,
    },
    visibility: 571,
    pop: 0.66,
    snow: {
      '3h': 0.48,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-12 06:00:00',
  },
  {
    dt: 1607763600,
    main: {
      temp: 268.45,
      feels_like: 265.42,
      temp_min: 268.45,
      temp_max: 268.45,
      pressure: 1021,
      sea_level: 1021,
      grnd_level: 835,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 0.58,
      deg: 72,
    },
    visibility: 3869,
    pop: 0.22,
    snow: {
      '3h': 0.17,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-12 09:00:00',
  },
  {
    dt: 1607774400,
    main: {
      temp: 267.59,
      feels_like: 264.79,
      temp_min: 267.59,
      temp_max: 267.59,
      pressure: 1022,
      sea_level: 1022,
      grnd_level: 835,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 92,
    },
    wind: {
      speed: 0.09,
      deg: 265,
    },
    visibility: 10000,
    pop: 0.02,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-12 12:00:00',
  },
  {
    dt: 1607785200,
    main: {
      temp: 267.94,
      feels_like: 265.14,
      temp_min: 267.94,
      temp_max: 267.94,
      pressure: 1022,
      sea_level: 1022,
      grnd_level: 835,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d',
      },
    ],
    clouds: {
      all: 29,
    },
    wind: {
      speed: 0.13,
      deg: 145,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-12 15:00:00',
  },
  {
    dt: 1607796000,
    main: {
      temp: 271.87,
      feels_like: 268.49,
      temp_min: 271.87,
      temp_max: 271.87,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 834,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
    ],
    clouds: {
      all: 15,
    },
    wind: {
      speed: 1.5,
      deg: 109,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-12 18:00:00',
  },
  {
    dt: 1607806800,
    main: {
      temp: 272.85,
      feels_like: 268.89,
      temp_min: 272.85,
      temp_max: 272.85,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 830,
      humidity: 92,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 97,
    },
    wind: {
      speed: 2.54,
      deg: 336,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-12 21:00:00',
  },
  {
    dt: 1607817600,
    main: {
      temp: 270.04,
      feels_like: 264.01,
      temp_min: 270.04,
      temp_max: 270.04,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 830,
      humidity: 96,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 93,
    },
    wind: {
      speed: 5.1,
      deg: 329,
    },
    visibility: 10000,
    pop: 0.3,
    snow: {
      '3h': 0.14,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-13 00:00:00',
  },
  {
    dt: 1607828400,
    main: {
      temp: 270.08,
      feels_like: 264.17,
      temp_min: 270.08,
      temp_max: 270.08,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 833,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.96,
      deg: 337,
    },
    visibility: 237,
    pop: 0.84,
    snow: {
      '3h': 1.12,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-13 03:00:00',
  },
  {
    dt: 1607839200,
    main: {
      temp: 269.77,
      feels_like: 265.15,
      temp_min: 269.77,
      temp_max: 269.77,
      pressure: 1023,
      sea_level: 1023,
      grnd_level: 837,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.06,
      deg: 345,
    },
    visibility: 909,
    pop: 1,
    snow: {
      '3h': 1.36,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-13 06:00:00',
  },
  {
    dt: 1607850000,
    main: {
      temp: 268.32,
      feels_like: 265.27,
      temp_min: 268.32,
      temp_max: 268.32,
      pressure: 1028,
      sea_level: 1028,
      grnd_level: 840,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 84,
    },
    wind: {
      speed: 0.54,
      deg: 250,
    },
    visibility: 10000,
    pop: 0.29,
    snow: {
      '3h': 0.11,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-13 09:00:00',
  },
  {
    dt: 1607860800,
    main: {
      temp: 267.2,
      feels_like: 262.88,
      temp_min: 267.2,
      temp_max: 267.2,
      pressure: 1033,
      sea_level: 1033,
      grnd_level: 843,
      humidity: 92,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 65,
    },
    wind: {
      speed: 2.16,
      deg: 210,
    },
    visibility: 10000,
    pop: 0.14,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-13 12:00:00',
  },
  {
    dt: 1607871600,
    main: {
      temp: 266.69,
      feels_like: 261.99,
      temp_min: 266.69,
      temp_max: 266.69,
      pressure: 1036,
      sea_level: 1036,
      grnd_level: 845,
      humidity: 88,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 2.56,
      deg: 235,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-13 15:00:00',
  },
  {
    dt: 1607882400,
    main: {
      temp: 272.36,
      feels_like: 268.29,
      temp_min: 272.36,
      temp_max: 272.36,
      pressure: 1029,
      sea_level: 1029,
      grnd_level: 844,
      humidity: 83,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 2.36,
      deg: 192,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-13 18:00:00',
  },
  {
    dt: 1607893200,
    main: {
      temp: 274.21,
      feels_like: 269.84,
      temp_min: 274.21,
      temp_max: 274.21,
      pressure: 1024,
      sea_level: 1024,
      grnd_level: 840,
      humidity: 79,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    clouds: {
      all: 6,
    },
    wind: {
      speed: 2.98,
      deg: 164,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-13 21:00:00',
  },
  {
    dt: 1607904000,
    main: {
      temp: 270.76,
      feels_like: 267.62,
      temp_min: 270.76,
      temp_max: 270.76,
      pressure: 1025,
      sea_level: 1025,
      grnd_level: 840,
      humidity: 86,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n',
      },
    ],
    clouds: {
      all: 6,
    },
    wind: {
      speed: 0.85,
      deg: 234,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-14 00:00:00',
  },
  {
    dt: 1607914800,
    main: {
      temp: 270.22,
      feels_like: 266.53,
      temp_min: 270.22,
      temp_max: 270.22,
      pressure: 1025,
      sea_level: 1025,
      grnd_level: 839,
      humidity: 86,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 84,
    },
    wind: {
      speed: 1.55,
      deg: 272,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-14 03:00:00',
  },
  {
    dt: 1607925600,
    main: {
      temp: 270.47,
      feels_like: 267.6,
      temp_min: 270.47,
      temp_max: 270.47,
      pressure: 1022,
      sea_level: 1022,
      grnd_level: 836,
      humidity: 86,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 90,
    },
    wind: {
      speed: 0.42,
      deg: 194,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-14 06:00:00',
  },
  {
    dt: 1607936400,
    main: {
      temp: 271.1,
      feels_like: 267.44,
      temp_min: 271.1,
      temp_max: 271.1,
      pressure: 1019,
      sea_level: 1019,
      grnd_level: 834,
      humidity: 86,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n',
      },
    ],
    clouds: {
      all: 31,
    },
    wind: {
      speed: 1.65,
      deg: 220,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-14 09:00:00',
  },
  {
    dt: 1607947200,
    main: {
      temp: 272.83,
      feels_like: 269.38,
      temp_min: 272.83,
      temp_max: 272.83,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 834,
      humidity: 88,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n',
      },
    ],
    clouds: {
      all: 16,
    },
    wind: {
      speed: 1.69,
      deg: 211,
    },
    visibility: 10000,
    pop: 0.01,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-12-14 12:00:00',
  },
  {
    dt: 1607958000,
    main: {
      temp: 273.37,
      feels_like: 270.63,
      temp_min: 273.37,
      temp_max: 273.37,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 835,
      humidity: 87,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 71,
    },
    wind: {
      speed: 0.74,
      deg: 235,
    },
    visibility: 10000,
    pop: 0.04,
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-12-14 15:00:00',
  },
];

export default forecastData;
