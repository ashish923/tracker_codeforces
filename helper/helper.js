import axios from 'axios'

async function getUser(name) {
    // var respo = {}; 
    console.log(name);
    console.log("htt");
      const response = await axios.get(`https://codeforces.com/api/user.info?handles=${name}`); 
      return response;
    
  }
  async function getsubmission(name) {
    // var respo = {}; 
    console.log(name);
      const response = await axios.get(`https://codeforces.com/api/user.status?handle=${name}`); 
      return response;
    
  }
  

  export  {getUser,getsubmission}