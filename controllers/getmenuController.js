import fs from 'fs'
const getMenu = (req,res) => {
    let data = fs.readFileSync('output.json');
    var data2 = JSON.parse(data);
    res.render('visualizer',{
        data2:data2
    })

}
export { getMenu }