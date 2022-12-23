import { inject, injectable } from "tsyringe";

import { ICourtsRepository } from "../../../repositories/ICourtsRepository";
import { ICourtDTO } from "../ICourtDTO";

@injectable()
class CreateCourtUseCase {
  constructor(
    @inject("CourtsRepository")
    private courtsRepository: ICourtsRepository
  ) {}

  async execute({ name }: ICourtDTO): Promise<void> {
    const courtAlredyExists = await this.courtsRepository.findByCourt(name);

    if (courtAlredyExists) {
      throw new Error("Esta quadra já está cadastrada.");
    }

    this.courtsRepository.create({ name });
  }
}

export { CreateCourtUseCase };