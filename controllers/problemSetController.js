import fs from 'fs'
// import fs from 'fs'

    
const problemSetController = (req,res) => {
    let data = fs.readFileSync('output.json');
    var data2 = JSON.parse(data);
    // data2 = JSON.stringify(data2);
// console.log(data2.userDetatil[0].handle);
    res.render('problemset',{
        data2 : data2
    })

}
const TopicWiseController = (req,res) => {
    // let data = fs.readFileSync('output.json');
    // var data2 = JSON.parse(data);
    
    // data2 = JSON.stringify(data2);
    // console.log(data2.userDetatil[0].handle);
    res.render('index')

}



export { problemSetController,TopicWiseController }