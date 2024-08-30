import { EntityName } from 'src/common/enum/entity-name.enum';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { UserAddressEntity } from './address.entity';

@Entity(EntityName.User)
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  first_name: string;
  @Column({ nullable: true })
  last_name: string;
  @Column({ unique: true })
  mobile: string;
  @Column({ unique: true, nullable: true })
  email: string;
  @Column({ unique: true })
  invite_code: string;
  @Column({ default: 0 })
  score: number;
  @Column({ default: 0 })
  agentId: number;
  @CreateDateColumn({ type: 'time with time zone' })
  created_at: Date;
  @UpdateDateColumn({ type: 'time with time zone' })
  updated_at: Date;
  
  @OneToMany(() => UserAddressEntity, (address) => address.user)
  addressList: UserAddressEntity[];
}
