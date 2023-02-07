
import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table({
    tableName: 'employee',
})
export class FormDB extends Model<FormDB> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: 'unique_formId',
        primaryKey: true,

    })
    id: number;

    @Column({
        allowNull: false,
        comment: 'หมายเหตุ',
    })
    comment: string;

    @Column({
        allowNull: true,
        comment: 'ชื่อ',
    })
    firstName: string;

    @Column({
        allowNull: true,
        comment: 'คะแนนไรเดอร์',
    })
    resultRider: number;

    @Column({
        allowNull: true,
        comment: 'เลขออเดอร์',
    })
    orderNumber: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: true,
        comment: 'วันลาเริ่มต้น',
    })
    leaveStart: Date;

    @Column({
        type: DataType.DATEONLY,
        allowNull: true,
        comment: 'วันลาสิ้นสุด',

    })
    leaveEnd: Date;



}
