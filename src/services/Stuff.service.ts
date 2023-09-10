import { Request } from "express";
import { stuffRepository } from "../repositories";
import { Stuff } from "../entities";
import { ErrorHandler } from "../errors";

class StuffService {
  StuffCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const profile: Stuff = await stuffRepository.save({
      ...body,
    });

    return profile;
  };

  StuffListLoader = async (req: Request) => {
    let profiles: Stuff[] = await stuffRepository.all();
    profiles = profiles.sort((a, b) =>
      a.stuffProfileId > b.stuffProfileId
        ? -1
        : a.stuffProfileId < b.stuffProfileId
        ? 1
        : 0
    );
    return {
      status: 200,
      profiles: profiles,
    };
  };

  StuffLoader = async (req: Request) => {
    const profile: Stuff = await stuffRepository.findOne({
      stuffProfileId: req.params.stuffProfileId,
    });
    return { status: 200, profile: profile };
  };

  StuffEditor = async (req: Request) => {
    const profile: Stuff = await stuffRepository.findOne({
      stuffProfileId: req.params.stuffProfileId,
    });
    const stuffUpdated = {
      ...profile,
    };
    await stuffRepository.save(stuffUpdated);
    return {
      status: 200,
      profile: profile,
    };
  };

  StuffDeletor = async (req: Request) => {
    const profile: Stuff = await stuffRepository.findOne({
      stuffProfileId: req.params.stuffProfileId,
    });

    if (!profile) {
      throw new ErrorHandler(404, "Profile not found");
    }

    await stuffRepository.delete(req.params.stuffProfileId);

    return {
      status: 200,
      message: "Profile deleted",
    };
  };
}

export default new StuffService();
