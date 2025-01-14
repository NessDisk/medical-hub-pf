const medicalList = require('./medicalStafList.json')
import { User } from '../models/User'
import { Patient } from '../models/Patient'
import { MedicalStaff } from '../models/MedicalStaff'

const hashedPass = '$2b$10$RZzG/LFklcl/UazrmEKH2.gmoLLKLQ5U10XsYsA6afnRb5JH6ZlQ6'
// Resultado de hashear "12345"
const defaultMedicalStaff = async () => {

    const usersFromDB = await User.findAll();
    if (usersFromDB.length === 0) { 
        medicalList.map( async (e:any) =>
        
        {
            const newUser = {
                email: e.email,
                hashedPass: hashedPass,
                isStaff: true
            }
            const user = await User.create(newUser)

            const newPatient = {
                firstName: e.firstName,
                lastName: e.lastName,
                phone: e.phone,
                dni: e.dni,
                UserId: user.id,
                PlanId: null
            }
            const patient = await Patient.create(newPatient)

            const newMedic = {
                UserId: user.id,
                firstName: e.firstName,
                lastName: e.lastName,
                idNumber: e.dni
            }
            const medic = await MedicalStaff.create(newMedic)

        }
        )
    }
}

export default defaultMedicalStaff;
