const stateList = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
    latitude: 32.799,
    longitude: -86.8073,
    zoom: 5.1,
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
    latitude: 61.385,
    longitude: -152.2683,
    zoom: 3.4,
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
    latitude: -14.3064,
    longitude: -170.6961,
    zoom: 9.5,
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    latitude: 34.9513,
    longitude: -92.3809,
    zoom: 5.1,
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    latitude: 33.7712,
    longitude: -111.3877,
    zoom: 5.1,
  },
  {
    name: 'California',
    abbreviation: 'CA',
    latitude: 36.17,
    longitude: -119.7462,
    zoom: 4.6,
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
    latitude: 39.0646,
    longitude: -105.3272,
    zoom: 5.4,
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
    latitude: 41.5834,
    longitude: -72.7622,
    zoom: 7.1,
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
    latitude: 39.3498,
    longitude: -75.5148,
    zoom: 7.1,
  },
  {
    name: 'District of Columbia',
    abbreviation: 'DC',
    latitude: 38.8974,
    longitude: -77.0268,
    zoom: 10.1,
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
    latitude: 27.8333,
    longitude: -81.717,
    zoom: 5.1,
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
    latitude: 32.9866,
    longitude: -83.6487,
    zoom: 5.1,
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
    latitude: 144.7937,
    longitude: 13.4443,
    zoom: 9.2,
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
    latitude: 21.1098,
    longitude: -157.5311,
    zoom: 6.1,
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
    latitude: 44.2394,
    longitude: -114.5103,
    zoom: 5.1,
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
    latitude: 40.3363,
    longitude: -89.0022,
    zoom: 5.1,
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
    latitude: 39.8647,
    longitude: -86.2604,
    zoom: 5.1,
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
    latitude: 42.0046,
    longitude: -93.214,
    zoom: 5.5,
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
    latitude: 38.5111,
    longitude: -96.8005,
    zoom: 5.1,
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
    latitude: 37.669,
    longitude: -84.6514,
    zoom: 5.1,
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
    latitude: 31.1801,
    longitude: -91.8749,
    zoom: 5.1,
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    latitude: 42.2373,
    longitude: -71.5314,
    zoom: 7.1,
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
    latitude: 39.0724,
    longitude: -76.7902,
    zoom: 6.1,
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
    latitude: 44.6074,
    longitude: -69.3977,
    zoom: 5.2,
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
    latitude: 43.3504,
    longitude: -84.5603,
    zoom: 5.1,
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
    latitude: 45.7326,
    longitude: -93.9196,
    zoom: 5.1,
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
    latitude: 38.4623,
    longitude: -92.302,
    zoom: 5.1,
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
    latitude: 32.7673,
    longitude: -89.6812,
    zoom: 5.1,
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
    latitude: 46.9048,
    longitude: -110.3261,
    zoom: 5.1,
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
    latitude: 35.6411,
    longitude: -79.8431,
    zoom: 5.1,
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
    latitude: 47.5362,
    longitude: -99.793,
    zoom: 5.1,
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
    latitude: 41.1289,
    longitude: -98.2883,
    zoom: 5.1,
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
    latitude: 43.4108,
    longitude: -71.5653,
    zoom: 6.1,
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
    latitude: 40.314,
    longitude: -74.5089,
    zoom: 6.1,
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
    latitude: 34.8375,
    longitude: -106.2371,
    zoom: 5.1,
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
    latitude: 38.4199,
    longitude: -117.1219,
    zoom: 5.1,
  },
  {
    name: 'New York',
    abbreviation: 'NY',
    latitude: 42.1497,
    longitude: -74.9384,
    zoom: 5.1,
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
    latitude: 15.1063,
    longitude: 145.7065,
    zoom: 7.1,
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
    latitude: 40.3736,
    longitude: -82.7755,
    zoom: 5.1,
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
    latitude: 35.5376,
    longitude: -96.9247,
    zoom: 5.1,
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
    latitude: 44.5672,
    longitude: -122.1269,
    zoom: 5.1,
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    latitude: 40.5773,
    longitude: -77.264,
    zoom: 5.5,
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
    latitude: 18.2491,
    longitude: -66.628,
    zoom: 6.3,
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
    latitude: 41.6772,
    longitude: -71.5101,
    zoom: 8.1,
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
    latitude: 33.8191,
    longitude: -80.9066,
    zoom: 6.1,
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
    latitude: 44.2853,
    longitude: -99.4632,
    zoom: 5.1,
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
    latitude: 35.7449,
    longitude: -86.7489,
    zoom: 5.1,
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
    latitude: 31.106,
    longitude: -97.6475,
    zoom: 4.1,
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
    latitude: 40.1135,
    longitude: -111.8535,
    zoom: 5.1,
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
    latitude: 37.768,
    longitude: -78.2057,
    zoom: 5.1,
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
    latitude: 18.3357,
    longitude: -64.8963,
    zoom: 7.7,
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
    latitude: 44.0407,
    longitude: -72.7093,
    zoom: 6.1,
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
    latitude: 47.3917,
    longitude: -121.5708,
    zoom: 5.1,
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    latitude: 44.2563,
    longitude: -89.6385,
    zoom: 5.1,
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
    latitude: 38.468,
    longitude: -80.9696,
    zoom: 5.1,
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
    latitude: 42.7475,
    longitude: -107.2085,
    zoom: 5.1,
  },
];

export default stateList;
