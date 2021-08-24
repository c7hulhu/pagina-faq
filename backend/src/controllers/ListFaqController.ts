import { Request, Response } from "express";
import { ListFaqService } from "../services/ListFaqService";

class ListFaqController {
  async handle(request: Request, response: Response) {
    const listFaqService = new ListFaqService();

    const faqs = await listFaqService.execute();

    return response.json(faqs);
  }
}

export { ListFaqController };
