import {Sequelize} from 'sequelize-typescript';
import config from '../lib/config';
config;




export const sequelize = new Sequelize({
	dialect: 'postgres',
	database: config.dbName,
	password: config.dbPassword,
	username: config.dbUser,
	storage: ':memory:',
	models: [__dirname + '/models'],
	logging: false,
});


const { MedicalStaff, Specialitie, User, Administrator} = sequelize.models;


MedicalStaff.belongsToMany(Specialitie, { through: "MedicalStaff_Specialitie" });
Specialitie.belongsToMany(MedicalStaff, { through: "MedicalStaff_Specialitie" });
Administrator.belongsTo(User);