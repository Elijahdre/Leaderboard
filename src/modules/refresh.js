import retrieveData from './retrieve.js'

const collectData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  retrieveData(data.result)
} 


export default collectData;