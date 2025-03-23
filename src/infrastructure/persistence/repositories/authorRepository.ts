//  APPLICATION
import { AuthorDto } from "../../../application/author/common/index";

//INFRASTRUCTURE
import prismaContext from "../applicationDbContext";

//  DOMAIN
import { IAuthorRepository } from "../../../domain/repositories/iAuthorRepository";
import { IAuthorId } from "../../../domain/valueObjects/authorId";

class AuthorRepository implements IAuthorRepository {
    #prismaClient: import("@prisma/client").PrismaClient

    constructor(prismaclient: import("@prisma/client").PrismaClient) {
        this.#prismaClient = prismaclient
    }

    async GetAllAsync(): Promise<AuthorDto[]> {
        return await this.#prismaClient.author.findMany();
    }
    async GetByIdAsync(id: IAuthorId): Promise<AuthorDto> {
        return await this.#prismaClient.author.findUnique({
            where: {
                Id: id.value
            }
        });
    }
    async AddAsync(author: AuthorDto) {
        this.#prismaClient.author.create({ data: author });
    }
    async UpdateAsync(author: AuthorDto) {
        this.#prismaClient.author.update({
            where: {
                Id: author.Id
            },
            data: author
        })
    }
    async DeleteAsync(author: AuthorDto) {
        this.#prismaClient.author.delete({
            where: {
                Id: author.Id
            }
        })
    }

}

export default new AuthorRepository(prismaContext);