import {IRepository} from "@/interface/repository/repository.interface";

export class CategoryRepository implements IRepository<any> {
    findAll(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
