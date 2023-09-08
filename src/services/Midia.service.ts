import { Request } from "express";
import { midiaRepository } from "../repositories";
import { Midia } from "../entities";
import { ErrorHandler } from "../errors";

class MidiaService {
  MidiaCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const profile: Midia = await midiaRepository.save({
      ...body,
    });

    return profile;
  };

  MidiaListLoader = async (req: Request) => {
    let profiles: Midia[] = await midiaRepository.all();
    profiles = profiles.sort((a, b) =>
      a.midiaProfileId > b.midiaProfileId
        ? -1
        : a.midiaProfileId < b.midiaProfileId
        ? 1
        : 0
    );
    return {
      status: 200,
      profiles: profiles,
    };
  };

  MidiaLoader = async (req: Request) => {
    const profile: Midia = await midiaRepository.findOne({
      midiaProfileId: req.params.midiaProfileId,
    });
    return { status: 200, profile: profile };
  };

  MidiaEditor = async (req: Request) => {
    const profile: Midia = await midiaRepository.findOne({
      midiaProfileId: req.params.midiaProfileId,
    });
    const midiaUpdated = {
      ...profile,
    };
    await midiaRepository.save(midiaUpdated);
    return {
      status: 200,
      profile: profile,
    };
  };

  MidiaDeletor = async (req: Request) => {
    const profile: Midia = await midiaRepository.findOne({
      midiaProfileId: req.params.midiaProfileId,
    });

    if (!profile) {
      throw new ErrorHandler(404, "Profile not found");
    }

    await midiaRepository.delete(req.params.midiaProfileId);

    return {
      status: 200,
      message: "Profile deleted",
    };
  };
}

export default new MidiaService();
