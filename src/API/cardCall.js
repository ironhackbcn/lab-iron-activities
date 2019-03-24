import axios from 'axios'

export const cardCall = async () => {
  try {
    return await axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=20&offset=0`)
  } catch(error){
    console.log(error)
  }
}