import axios from 'axios'

export const getQuotes = async () =>{

    const {data} = await axios.get("https://type.fit/api/quotes");
   
    // console.log(data)
    return data.slice(6, 12);
}
