// const data = [
//     {name:'Mudassir ', email:'mudassir@gmail.com',password:'12345'},
//     {name:'Hussain', email:'hussain@gmail.com',password:'23456'},
//     {name:'atif', email:'atif@gmail.com',password:'34567'},
// ]

// const create = (req,res)=>{
//     const { id } = req.body;
//     const existingUser = data.find((x)=> x.id === id)

//     if(existingUser){
//         res.send('user already exist')
//     }else{
//         data.push(req.body)
//         return res.send(data)
//     }
// }


// const getAllUser = (req,res)=>{
//     res.send(data)
// }

// const getOneUser = (req,res)=>{
//     const { id } = req.body;
//     const findOneUser = data.find((x)=> x.id === parseInt(req.params.id))

//     if(findOneUser){
//         res.send(data)
//     }else{
//         res.send('user not found ')
//     }
// }

// const deleteUser = (req,res)=>{
//     const { id } = req.params;
//     const user = data.find((x)=> x.id !== id)

//     if(user){
//         return res.send(data)
//     }else{
//         res.send('request does not match')
//     }
// }

// const update = (req,res)=>{
//     const {name, email, password,file} = req.body;
//     const updateData = data.find((x)=> x.id === parseInt(req.params.id))

//     if(updateData){
//         if(id){
//             updateData.id = id
//         }
//     }
// }