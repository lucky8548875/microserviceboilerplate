export const test = (req, res) =>{
    try {
        const success = true;
        if(success){
            res.json({
                statusCode:200, //status code for success
                name:'Success',
                data:{
                    arrayData:[],
                    message:'Some addition message here..'
                }
            })  
        }else{
            res.json({
                statusCode:403, //set your own status code here
                name:'Failed',
                error:{
                    code:403,
                    message:'Some addition message here..'
                }
            })   
        }
       
    } catch (error) {
        res.json({
            statusCode:500, //set your own status code here
            name:'Failed',
            error:{
                code:403,
                message: error.message
            }
        })   
    }
   
}