import dayjs from "dayjs";

export const APP_INFO = {
  version: `v${__APP_VERSION__}`,
  lastUpdated: dayjs("2026-10-23").format("DD MMMM YYYY"),
};
