import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePlays1594063071176 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'plays',
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
            name: 'team_1_id',
            type: 'uuid',
          },
          {
            name: 'team_2_id',
            type: 'uuid',
          },
          {
            name: 'round_team_1',
            type: 'int',
            default: 0,
          },
          {
            name: 'round_team_2',
            type: 'int',
            default: 0,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'count_play',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
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
            name: 'PlayStage',
            referencedTableName: 'stages',
            referencedColumnNames: ['id'],
            columnNames: ['stage_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'PlayTeam1',
            referencedTableName: 'teams',
            referencedColumnNames: ['id'],
            columnNames: ['team_1_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'PlayTeam2',
            referencedTableName: 'teams',
            referencedColumnNames: ['id'],
            columnNames: ['team_2_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'PlayUser',
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
    await queryRunner.dropTable('plays');
  }
}
