import { WritingRepository } from "@/repository/writing/writing.repository";

export class WritingService {
  constructor(private readonly writingRepository: WritingRepository) {}

  public static createInstance(): WritingService {
    return new WritingService(WritingRepository.createInstance());
  }

  public async getWritingById(param: { id: string }) {
    const { id } = param;
    return this.writingRepository.findOne(id);
  }

  public async getWritings() {
    return this.writingRepository.findAll();
  }

  public async getFeaturedWritings() {
    const writings = await this.writingRepository.findAll();
    return writings.slice(0, 2);
  }
}
