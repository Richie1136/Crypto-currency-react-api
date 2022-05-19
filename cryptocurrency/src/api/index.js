// import axios from "axios";

// export const getCoinsData = async () => {

//   try {
//     // request
//     const { data: { data } } = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
//       params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         'tiers[0]': '1',
//         orderBy: 'marketCap',
//         orderDirection: 'desc',
//         limit: '50',
//       },
//       headers: {
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//         'X-RapidAPI-Key': '655bdaa00dmsh1dfed893f79b687p102403jsn162126e9f66e'
//       }
//     });
//     return data;
//   } catch (error) {
//     console.log(error)
//   }
// }