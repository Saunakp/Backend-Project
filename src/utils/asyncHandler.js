// First Method
const asyncHandler = () => {
    (req,res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>{
            next(err)
        })
    }
}

// Second Method
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }