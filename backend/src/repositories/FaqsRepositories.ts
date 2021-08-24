import { EntityRepository, Repository } from "typeorm";
import { Faq } from "../entities/Faq";

@EntityRepository(Faq)
class FaqsRepositories extends Repository<Faq> {}

export { FaqsRepositories };
