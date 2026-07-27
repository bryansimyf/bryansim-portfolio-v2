import dayjs from "dayjs";

export const APP_INFO = {
  version: `v${__APP_VERSION__}`,
  lastUpdated: dayjs("2026-07-27").format("DD MMMM YYYY"),
};
