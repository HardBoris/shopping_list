import { Request } from "express";
import { partnerRepository } from "../repositories";
import { Partner } from "../entities";
import { ErrorHandler } from "../errors";

class PartnerService {
  PartnerCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const partner: Partner = await partnerRepository.save({
      ...body,
    });

    return partner;
  };

  PartnerListLoader = async (req: Request) => {
    let partners: Partner[] = await partnerRepository.all();
    partners = partners.sort((a, b) =>
      a.partnerId > b.partnerId ? -1 : a.partnerId < b.partnerId ? 1 : 0
    );
    return {
      status: 200,
      partners: partners,
    };
  };

  PartnerLoader = async (req: Request) => {
    const partner: Partner = await partnerRepository.findOne({
      partnerId: req.params.partnerId,
    });
    return { status: 200, partner: partner };
  };

  PartnerEditor = async (req: Request) => {
    const partner: Partner = await partnerRepository.findOne({
      partnerId: req.params.partnerId,
    });
    const partnerUpdated = {
      ...partner,
    };
    await partnerRepository.save(partnerUpdated);
    return {
      status: 200,
      partner: partner,
    };
  };

  PartnerDeletor = async (req: Request) => {
    const partner: Partner = await partnerRepository.findOne({
      partnerId: req.params.partnerId,
    });

    if (!partner) {
      throw new ErrorHandler(404, "Partner not found");
    }

    await partnerRepository.delete(req.params.partnerId);

    return {
      status: 200,
      message: "Partner deleted",
    };
  };
}

export default new PartnerService();
