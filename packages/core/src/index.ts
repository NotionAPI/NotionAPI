import { NotionClient } from "@notiondocs/api-client";
import { NotionCollectionService } from "./collection";
import { NotionPageService } from "./page";

/**
 * Creates an object with a {@link NotionPageService} and {@link NotionCollectionService} using provided {@link NotionClient}.
 * @param client
 */
export const createNotionService = (client: NotionClient) => {
  const page = new NotionPageService(client);
  const collection = new NotionCollectionService(client, page);
  return { page, collection };
};

export * from "./collection";
export * from "./page";
export * from "./util";
