import { Router } from "express";
import { CreateFaqController } from "./controllers/CreateFaqController";
import { ListFaqController } from "./controllers/ListFaqController";

const router = Router();

const createFaqController = new CreateFaqController();
const listFaqController = new ListFaqController();

router.post("/faqs", createFaqController.handle);

router.get("/faqs", listFaqController.handle);

export { router };
