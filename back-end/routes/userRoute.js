import express from 'express'
import { bookAppointment, getProfile, loginUser, registerUser, updateProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile', authUser, getProfile)
//here using 2-middleware i)passing the form data ii)Authenticate the user and getting the usetId
userRouter.post('/update-profile', upload.single('image'), authUser, updateProfile)

// book appointment router
userRouter.post('/book-appointment', authUser, bookAppointment)

export default userRouter