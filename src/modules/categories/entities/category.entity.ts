import { EntityName } from "src/common/enum/entity-name.enum";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity(EntityName.Category)
export class CategoryEntity {
    @PrimaryGeneratedColumn("identity")
    id:number;
    @Column()
    title: string;
    @Column()
    slug:string;
    @Column()
    image:string
    @Column()
    show:boolean
    @Column()
    parentId:number 
    
    @ManyToOne(()=>CategoryEntity,category => category.children,{onDelete:"CASCADE"})
    parent:CategoryEntity

    @OneToMany(()=>CategoryEntity, category=> category.parent)
    children:CategoryEntity[]
}
