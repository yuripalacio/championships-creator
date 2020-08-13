import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Team from '@modules/teams/infra/typeorm/entities/Team';

@Entity('plays')
class Play {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  stage_id: string;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'stage_id' })
  stage: Team;

  @Column()
  team_1_id: string;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'team_1_id' })
  team_1: Team;

  @Column()
  team_2_id: string;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'team_2_id' })
  team_2: Team;

  @Column()
  round_team_1: number;

  @Column()
  round_team_2: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  count_play: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Play;
