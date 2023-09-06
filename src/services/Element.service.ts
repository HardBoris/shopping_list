import { Request } from "express";
import { elementRepository } from "../repositories";
import { Element } from "../entities";
import { ErrorHandler } from "../errors";

class ElementService {
  ElementCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const element: Element = await elementRepository.save({
      ...body,
    });

    return element;
  };

  ElementListLoader = async (req: Request) => {
    let elements: Element[] = await elementRepository.all();
    elements = elements.sort((a, b) =>
      a.elementId > b.elementId ? -1 : a.elementId < b.elementId ? 1 : 0
    );
    return {
      status: 200,
      elements: elements,
    };
  };

  ElementLoader = async (req: Request) => {
    const element: Element = await elementRepository.findOne({
      elementId: req.params.elementId,
    });
    return { status: 200, element: element };
  };

  ElementEditor = async (req: Request) => {
    const element: Element = await elementRepository.findOne({
      elementId: req.params.elementId,
    });
    const elementUpdated = {
      ...element,
    };
    await elementRepository.save(elementUpdated);
    return {
      status: 200,
      element: element,
    };
  };

  ElementDeletor = async (req: Request) => {
    const element: Element = await elementRepository.findOne({
      elementId: req.params.elementId,
    });

    if (!element) {
      throw new ErrorHandler(404, "Element not found");
    }

    await elementRepository.delete(req.params.elementId);

    return {
      status: 200,
      message: "Element deleted",
    };
  };
}

export default new ElementService();
