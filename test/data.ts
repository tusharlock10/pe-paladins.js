import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import { Enums } from '../src/paladins';

dayjs.extend(utcPlugin);

const date = dayjs.utc().format("YYYYMMDD");
const hour = dayjs.utc().format("H");

export const testData = {
  getChampionCards: 2548,
  getPlayerChampionRanks: 718389146,
  getMatchIdsByQueue: [hour, date, Enums.Queue.Ranked] as [string, string, Enums.Queue],
  getChampionSkins: Enums.Champions.Androxus,
  getPlayer: 718389146,
  getPlayerBatch: [507294712, 717323258, 12141128],
  getPlayerRelationships: 718389146,
  getPlayerLoadouts: 718389146,
  getPlayerStatus: 718389146,
  getPlayerMatchHistory: 718389146,
  getPlayerQueueStats: [718389146, Enums.Queue.Onslaught] as [number, Enums.Queue],
  getPlayerQueueStatsBatch: [718389146, [Enums.Queue.Onslaught, Enums.Queue.Ranked]] as [number, Enums.Queue[]],
  getLeaderboard: Enums.Ranks.Master,
  getMatchModeDetailsBatch: [1128400064],
  getMatchDetails: 1243066928,
  getActiveMatchDetails: 1128406071,
  searchPlayers: "tusharlock10",
};