import {Response, Request, Router} from 'express';
import { Patient } from '../models/Patient';
import { User } from '../models/User';
import { authenticateToken } from './middelwares'
const router = Router();


router.get('/', authenticateToken , async (req: any, res) => {
    let email = req.email.email

    try {
        let user: any = await User.findOne({ where: { email: email}});

        let userId = user.dataValues.id
        const patient: any = await Patient.findOne({ where: {UserId: userId} });
        
        res.send(patient.dataValues) 
    }
    catch (error) {
        console.log(error)
        return res.sendStatus(404)
    } 
});

export default router;

