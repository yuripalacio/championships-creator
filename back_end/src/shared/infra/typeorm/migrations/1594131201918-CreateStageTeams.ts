import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStageTeams1594131201918
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stages_teams',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'stage_id',
            type: 'uuid',
          },
          {
            name: 'team_id',
            type: 'uuid',
          },
          {
            name: 'score',
            type: 'int',
            default: 0,
          },
          {
            name: 'round',
            type: 'int',
            default: 0,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'StageOfTeam',
            referencedTableName: 'stages',
            referencedColumnNames: ['id'],
            columnNames: ['stage_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'TeamOfStage',
            referencedTableName: 'teams',
            referencedColumnNames: ['id'],
            columnNames: ['team_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'StageTeamUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stages_teams');
  }
}
