import { Request, Response } from "express";
import { CreateFaqService } from "../services/CreateFaqService";

class CreateFaqController {
  async handle(request: Request, response: Response) {
    const { title, description } = request.body;

    const createFaqService = new CreateFaqService();

    const faq = await createFaqService.execute({
      title,
      description,
    });

    return response.json(faq);
  }
}

export { CreateFaqController };
