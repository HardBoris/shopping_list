import { Request } from "express";
import { toolRepository } from "../repositories";
import { Tool } from "../entities";
import { ErrorHandler } from "../errors";

class ToolService {
  ToolCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const profile: Tool = await toolRepository.save({
      ...body,
    });

    return profile;
  };

  ToolListLoader = async (req: Request) => {
    let profiles: Tool[] = await toolRepository.all();
    profiles = profiles.sort((a, b) =>
      a.toolProfileId > b.toolProfileId
        ? -1
        : a.toolProfileId < b.toolProfileId
        ? 1
        : 0
    );
    return {
      status: 200,
      profiles: profiles,
    };
  };

  ToolLoader = async (req: Request) => {
    const profile: Tool = await toolRepository.findOne({
      toolProfileId: req.params.toolProfileId,
    });
    return { status: 200, profile: profile };
  };

  ToolEditor = async (req: Request) => {
    const profile: Tool = await toolRepository.findOne({
      toolProfileId: req.params.toolProfileId,
    });
    const toolUpdated = {
      ...profile,
    };
    await toolRepository.save(toolUpdated);
    return {
      status: 200,
      profile: profile,
    };
  };

  ToolDeletor = async (req: Request) => {
    const profile: Tool = await toolRepository.findOne({
      toolProfileId: req.params.toolProfileId,
    });

    if (!profile) {
      throw new ErrorHandler(404, "Profile not found");
    }

    await toolRepository.delete(req.params.toolProfileId);

    return {
      status: 200,
      message: "Profile deleted",
    };
  };
}

export default new ToolService();
