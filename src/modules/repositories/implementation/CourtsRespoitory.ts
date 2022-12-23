import { Courts } from "../../entities/Courts";
import { ICourtDTO } from "../../useCases/courts/ICourtDTO";
import { ICourtsRepository } from "../ICourtsRepository";

class CourtsRepository implements ICourtsRepository {
  private courts: Courts[];

  constructor() {
    this.courts = [];
  }

  async findById(id: string): Promise<Courts> {
    const court = this.courts.find((court) => court.id === id);
    return court;
  }

  async findByCourt(name: string): Promise<Courts> {
    const court = this.courts.find((court) => court.name === name);
    return court;
  }

  async all(): Promise<Courts[]> {
    return this.courts;
  }

  async create({ name }: ICourtDTO): Promise<void> {
    const court = new Courts();

    Object.assign(court, {
      name,
    });

    this.courts.push(court);
  }

  async update({ id, name }: ICourtDTO): Promise<void> {
    const court = this.findById(id);

    Object.assign(court, {
      name,
      updated_at: new Date(),
    });
  }
}

export { CourtsRepository };
