import { Request, Response } from "express";
import { toolService } from "../services";

class ToolController {
  ToolCreator = async (req: Request, res: Response) => {
    const tool = await toolService.ToolCreator(req);
    return res.status(201).json(tool);
  };
  ToolListLoader = async (req: Request, res: Response) => {
    const { status, profiles } = await toolService.ToolListLoader(req);
    return res.status(status).json(profiles);
  };

  ToolLoader = async (req: Request, res: Response) => {
    const { status, profile } = await toolService.ToolLoader(req);
    return res.status(status).json(profile);
  };

  ToolEditor = async (req: Request, res: Response) => {
    const { status, profile } = await toolService.ToolEditor(req);
    return res.status(status).json(profile);
  };

  ToolDeletor = async (req: Request, res: Response) => {
    const { status, message } = await toolService.ToolDeletor(req);
    return res.status(status).json(message);
  };
}

export default new ToolController();
