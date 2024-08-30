import { EntityName } from "src/common/enum/entity-name.enum";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity(EntityName.UserAddress)
export class UserAddressEntity {
    @PrimaryGeneratedColumn("increment")
    id : number ;

    @Column()
    title:string
    @Column()
    province:string
    @Column()
    city:string
    @Column()
    address:string
    @Column({nullable:true})
    postal_code:number
    @Column()
    userId:number
    @CreateDateColumn({type:"time with time zone"})
    created_at:Date

    @ManyToOne(()=>UserEntity,user=>user.addressList,{onDelete:"CASCADE"})
    user:UserEntity
}