export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.503215',
    bl_lng: '25.324261',
    tr_lat: '42.869652',
    tr_lng: '44.552871',
    limit: '300'
  },
  headers: {
    'X-RapidAPI-Key': 
    'f313166c69msh9efd49229bf8f5ap19ef2bjsn155dc0f115df',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};

export const options2 = {
  headers: {
  'X-RapidAPI-Key': 
  'f313166c69msh9efd49229bf8f5ap19ef2bjsn155dc0f115df',
  'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
},
};
