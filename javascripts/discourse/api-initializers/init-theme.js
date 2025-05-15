import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.replaceIcon("link", "avidreader-icon-link");
  api.replaceIcon("thumbtack", "avidreader-icon-thumbtack");
  api.replaceIcon("reply", "avidreader-icon-reply");
});
