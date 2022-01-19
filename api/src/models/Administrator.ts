import {Model, Column,Default, Table, CreatedAt,DataType,  UpdatedAt} from 'sequelize-typescript';
// testeo de var enum  sin valores asignados


@Table
export class Administrator extends Model {

    @Column
	firstName!: string;

    @Column
	lastName!: string;

    @Column
	address!: string;

    @Column
	dni!: string;

    @Column
	phone!: string;

}