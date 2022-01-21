import {Model, Column,Default, Table, CreatedAt,DataType,  UpdatedAt, AllowNull} from 'sequelize-typescript';
// testeo de var enum  sin valores asignados


@Table
export class MedicalStaff extends Model {
	
	@AllowNull(false) 
		@Column
		name!: string;

	@AllowNull(false)
		@Column
		idNumber!: number;

	@AllowNull(false)
		@Default('L a V')
		@Column(DataType.ENUM('L a V', 'L M V'))
		availability!: "L a V'|'L M V";

	@AllowNull(false)
		@Column
		avbFrom!: Date ;

	@AllowNull(false)
		@Column
		avbTo!: Date ;

	@AllowNull(false)
		@Column
		appointmentDuration!: Date ;


		@CreatedAt
		@Column
		createdAt!: Date;

		@UpdatedAt
		@Column
		updatedAt!: Date;
}