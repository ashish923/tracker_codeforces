import { getUser, getsubmission} from '../helper/helper.js'
// import fs from 'fs'
// const fs = require('fs');
import fs from 'fs'
const menuController = (req,res) => {

    const Name = req.body.userName;
    // console.log(`${Name}dadad`)
    var data1 = {
        "userDetatil" : [],
        "problemCount": 23,
        "solvedQuestion":[],
        "attemptedQuestion":[],
        "upsolveQuestion":[],
        "vertict":[],
        "tags":[]
    };
    // console.log(Name);

    // getting user details 
     getUser(Name).then(data => {
        // console/log("hello");
        // console.log(data.data)
        var data11 = data.data.result;
        data1.userDetatil = data11;
        console.log(typeof data1)
        console.log("hey there is some dataa");
        console.log(data11);
    });


// getting problem details

getsubmission(Name).then(
    data =>{ 
    // console.log(data.data.result)
    var da = data.data.result;
    // console.log(da);
    const map1 = new Map();
    var passedALLData = [];
    let solvedQues = new Set()
    var notpassedALLData = [];
    // var solvedQues = [];
    let NotsolvedQues = new Set()
    // var NotsolvedQues = [];
    for (var i=0; i<da.length; i++){

        // for verdict data
        var verd = da[i].verdict;
        if(map1.has(da[i].verdict)){
            var k = map1.get(da[i].verdict); 
            map1.set(verd,k+1);
        }
        else {
            map1.set(verd,1);
        }

        // for submit question with passed all test cases
        if(verd == "OK"){
            if(!solvedQues.has(da[i].problem.name))
                {passedALLData.push(da[i]);
                solvedQues.add(da[i].problem.name);
                }
              
        }
        else{
            
            if(!NotsolvedQues.has(da[i].problem.name))
            {
                notpassedALLData.push(da[i]);
                NotsolvedQues.add(da[i].problem.name);
            }
 
        }

     }

    
var attempted = [];
     for (var i=0; i<notpassedALLData.length; i++){

        if(!solvedQues.has(notpassedALLData[i].problem.name)){
            attempted.push(notpassedALLData[i]);
        }
     }
    //  console.log("solved");
    //  console.log(attempted);
     const tagmap = new Map();
     for (var i=0; i<passedALLData.length; i++){

        // tags
        var tag = passedALLData[i].problem.tags;
        for(var j =0; j<tag.length; j++){
            var v = tag[j];
            console.log(v);
            if(tagmap.has(v)){
                var k = tagmap.get(v); 
                tagmap.set(v,k+1);
            }
            else {
                tagmap.set(v,1);
            }

        }
        
     }
     var tagString = Object.fromEntries(tagmap);
    // console.log(tagmap);
     data1.tags = tagString;
    //  console.log(passedALLData);
    //  console.log(notpassedALLData);

     
    //  console.log(map1);
     var verdictString = Object.fromEntries(map1);
     data1.vertict = verdictString;
     data1.solvedQuestion = passedALLData;
     data1.attemptedQuestion = attempted;



    //  to iterate through map object
    //  for (const [key, value] of map1.entries()) {
    //     console.log(key, value);
    //   }

    var jsonContent = JSON.stringify(data1);
    // console.log(jsonContent);

    fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        // console.log("JSON file has been saved.");
    });
      
}

)
let data = fs.readFileSync('output.json');
var data2 = JSON.parse(data);
// console.log(data1);

    res.render('visualizer', {
        data2 :  data2
    })

}
export { menuController}

