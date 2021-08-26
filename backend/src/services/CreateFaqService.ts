import { getCustomRepository } from "typeorm";
import { FaqsRepositories } from "../repositories/FaqsRepositories";

interface IFaqRequest {
  title: string;
  description: string;
}

class CreateFaqService {
  async execute({ title, description }: IFaqRequest) {
    const faqRepository = getCustomRepository(FaqsRepositories);

    console.log(title);

    if (!title) {
      throw new Error("Title Incorrect!");
    }
    if (!description) {
      throw new Error("Description Incorrect!");
    }

    const faq = faqRepository.create({
      title,
      description,
    });

    await faqRepository.save(faq);

    return faq;
  }
}

export { CreateFaqService };
