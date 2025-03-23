//  APPLICATION
import { AuthorDto } from "../../application/author/common/index";

//  DOMAIN
import { IAuthorId } from "../valueObjects/authorId";

export interface IAuthorRepository {
  GetAllAsync(): Promise<AuthorDto[]>;

  GetByIdAsync(id: IAuthorId): Promise<AuthorDto>;

  AddAsync(author: AuthorDto): Promise<void>;

  UpdateAsync(author: AuthorDto): Promise<void>;

  DeleteAsync(author: AuthorDto): Promise<void>;
}
