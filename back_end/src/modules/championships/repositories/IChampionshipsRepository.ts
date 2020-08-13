import Championship from '../infra/typeorm/entities/Championship';
import ICreateChampionshipDTO from '../dtos/ICreateChampionshipDTO';

export default interface IChampionshipsRepository {
  findByUser(user_id: string): Promise<Championship | undefined>;
  create(data: ICreateChampionshipDTO): Promise<Championship>;
  save(championship: Championship): Promise<Championship>;
  delete(championship: Championship): Promise<void>;
}
