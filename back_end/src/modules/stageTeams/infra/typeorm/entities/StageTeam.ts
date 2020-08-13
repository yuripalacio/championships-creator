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
import Stage from '@modules/stages/infra/typeorm/entities/Stage';

@Entity('stages_teams')
class StageTeam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  stage_id: string;

  @ManyToOne(() => Stage)
  @JoinColumn({ name: 'stage_id' })
  stage: Stage;

  @Column()
  team_id: string;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @Column()
  score: number;

  @Column()
  round: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default StageTeam;
