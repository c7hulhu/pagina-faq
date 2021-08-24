import { getCustomRepository } from "typeorm";
import { FaqsRepositories } from "../repositories/FaqsRepositories";

class ListFaqService {
  async execute() {
    const faqRepositories = getCustomRepository(FaqsRepositories);

    const faqs = await faqRepositories.find();

    return faqs;
  }
}

export { ListFaqService };
