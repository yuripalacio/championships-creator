import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddChampionshipFieldToTeams1594070384001
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'teams',
      new TableColumn({
        name: 'championship_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'teams',
      new TableForeignKey({
        name: 'TeamChampionship',
        columnNames: ['championship_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'championships',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('teams', 'TeamChampionship');

    await queryRunner.dropColumn('teams', 'championship_id');
  }
}
