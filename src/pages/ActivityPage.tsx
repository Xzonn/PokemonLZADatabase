import { Card, Spin } from "antd";
import React, { FC, Fragment, useEffect, useMemo, useState } from "react";

import { ItemIconWithoutTooltip, ItemRewardsTable, New, Now, PokemonIcon } from "@/components";
import { ItemDataByName, PokemonDataByName } from "@/data";
import { IItemReward, ILevelReward, ISeasonReward } from "@/types";
import { DEFAULT_TITLE, Link, useImport, useLoadingAnchor } from "@/utils";

interface IInternetBattleRewardsTableProps {
  random: IItemReward[];
  guaranteed: IItemReward[];
}

const InternetBattleRewardsTable: FC<IInternetBattleRewardsTableProps> = ({ random, guaranteed }) => (
  <>
    <h4>固定奖励</h4>
    <ItemRewardsTable data={guaranteed} />

    <h4>随机奖励</h4>
    <ItemRewardsTable data={random} />
  </>
);

const parseDate = (dateStr: string, timeStr = "00:00"): Date => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr) || !/^\d{2}:\d{2}$/.test(timeStr)) {
    throw new Error(`Invalid date string: ${dateStr}`);
  }
  return new Date(`${dateStr}T${timeStr}:00+0800`);
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year} 年 ${month} 月 ${day} 日`;
};

const RewardCard: FC<{ season: ISeasonReward; rewardKey: "promotionRewards" | "seasonRewards" }> = ({
  season,
  rewardKey,
}) => {
  const [now] = useState(() => Date.now());
  return (
    <Card
      title={
        <>
          <Link to={season.url}>第 {season.season} 赛季</Link>
          {now >= +parseDate(season.startDate, "14:00") && now <= +parseDate(season.endDate, "10:00") && <Now />}
        </>
      }
    >
      <div className="flex-container">
        {[
          ...new Set(
            season[rewardKey].flatMap((reward) =>
              reward.items.filter((item) => /(?:球|进化石)$/.exec(item.item)).map((item) => item.item),
            ),
          ),
        ].map((item) => (
          <ItemIconWithoutTooltip
            key={item}
            item={ItemDataByName[item]}
            size={64}
          />
        ))}
      </div>
      <div className="text-center">
        {formatDate(parseDate(season.startDate, "14:00"))}～{formatDate(parseDate(season.endDate, "10:00"))}
      </div>
      {season[rewardKey].map((reward) => (
        <div key={reward.levels}>
          <h4>{reward.levels}</h4>
          <ItemRewardsTable
            data={reward.items}
            headers={["道具", "数量"]}
          />
        </div>
      ))}
    </Card>
  );
};

const RewardCardLite: FC<{ season: string; rewards: ILevelReward[] }> = ({ season, rewards }) => (
  <Card title={season}>
    {rewards.map((reward) => (
      <div key={reward.levels}>
        <h4>{reward.levels}</h4>
        <ItemRewardsTable
          data={reward.items}
          headers={["道具", "数量"]}
        />
      </div>
    ))}
  </Card>
);

const ActivityPage: React.FC = () => {
  useEffect(() => {
    document.title = `联网活动 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(() => import("@/data/activity"));
  const promotionRewards = useMemo(
    () =>
      data?.SeasonRewardData.map((season) => (
        <RewardCard
          key={season.season}
          season={season}
          rewardKey="promotionRewards"
        />
      )),
    [data],
  );

  const seasonRewards = useMemo(
    () =>
      data?.SeasonRewardData.filter((season) => season.seasonRewards.length > 0).map((season) => (
        <RewardCard
          key={season.season}
          season={season}
          rewardKey="seasonRewards"
        />
      )),
    [data],
  );

  useLoadingAnchor([loading]);

  return (
    <Fragment key="research-list">
      <div className="section">
        <h1>联网活动</h1>
        <div className="description">
          注意：获取神秘礼物无需加入 Nintendo Switch Online（付费），连接对战需要加入 Nintendo Switch Online。
        </div>
        <div className="description">
          <Link to="https://plza-news.pokemon-home.com/sc/list">游戏内活动新闻</Link>
        </div>
      </div>

      <div className="section">
        <h2>神秘礼物</h2>
        <div className="activity-card-container">
          <Card title="拥有沙奈朵进化石的拉鲁拉丝">
            <div className="flex-container">
              <PokemonIcon
                pokemon={PokemonDataByName["拉鲁拉丝"]}
                link
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["沙奈朵进化石"]}
                size={64}
              />
            </div>
            <div className="flex-container">
              <div>
                <Link to="/p/拉鲁拉丝">拉鲁拉丝</Link> Lv.6
              </div>
              <div>
                <Link to="/i/沙奈朵进化石">沙奈朵进化石</Link>×1
              </div>
            </div>
            <div>
              <b>领取条件</b>：无
            </div>
            <div>
              <b>领取时间</b>：2025 年 10 月 16 日～2026 年 2 月 28 日
            </div>
          </Card>
          <Card title="100 个精灵球">
            <div className="flex-container">
              <ItemIconWithoutTooltip
                item={ItemDataByName["精灵球"]}
                size={64}
              />
            </div>
            <div className="text-center">
              <Link to="/i/精灵球">精灵球</Link>×100
            </div>
            <div>
              <b>领取条件</b>：序列号（购买下载版，邮件发送）
            </div>
            <div>
              <b>序列号领取时间</b>：2025 年 10 月 16 日～2026 年 2 月 28 日
            </div>
            <div>
              <b>序列号有效时间</b>：2025 年 10 月 16 日～2026 年 3 月 10 日
            </div>
          </Card>
          <Card title="精灵球豪华组合">
            <div className="flex-container">
              <ItemIconWithoutTooltip
                item={ItemDataByName["速度球"]}
                size={64}
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["诱饵球"]}
                size={64}
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["等级球"]}
                size={64}
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["沉重球"]}
                size={64}
              />
            </div>
            <div className="flex-container">
              <div>
                <Link to="/i/速度球">速度球</Link>×3
              </div>
              <div>
                <Link to="/i/诱饵球">诱饵球</Link>×3
              </div>
              <div>
                <Link to="/i/等级球">等级球</Link>×3
              </div>
              <div>
                <Link to="/i/沉重球">沉重球</Link>×3
              </div>
            </div>
            <div>
              <b>领取条件</b>：序列号（购买 DLC，邮件发送）
            </div>
            <div>
              <b>序列号领取时间</b>：2025 年 10 月 16 日～2026 年 2 月 28 日
            </div>
            <div>
              <b>序列号有效时间</b>：2025 年 10 月 16 日～2026 年 3 月 10 日
            </div>
          </Card>
          <Card title="“如宝石般的光芒”">
            <div className="flex-container">
              <ItemIconWithoutTooltip
                item={ItemDataByName["蒂安希进化石"]}
                size={64}
              />
            </div>
            <div className="text-center">
              <Link to="/i/蒂安希进化石">蒂安希进化石</Link>×1
            </div>
            <div className="text-center">
              领取后解锁<Link to="/side/EX1">副任务EX1</Link>
            </div>
            <div>
              <b>领取条件</b>：无
            </div>
            <div>
              <b>领取时间</b>：2025 年 11 月 6 日～
            </div>
          </Card>
          <Card title="“Ｍ项目”">
            <div className="flex-container">
              <ItemIconWithoutTooltip
                item={ItemDataByName["超梦进化石Ｘ"]}
                size={64}
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["超梦进化石Ｙ"]}
                size={64}
              />
            </div>
            <div className="flex-container">
              <div>
                <Link to="/i/超梦进化石Ｘ">超梦进化石Ｘ</Link>×1
              </div>
              <div>
                <Link to="/i/超梦进化石Ｙ">超梦进化石Ｙ</Link>×1
              </div>
            </div>
            <div className="text-center">
              领取后解锁<Link to="/side/EX2">副任务EX2</Link>
            </div>
            <div>
              <b>领取条件</b>：无
            </div>
            <div>
              <b>领取时间</b>：2025 年 12 月 2 日～
            </div>
          </Card>
          <Card
            title={
              <>
                PREPAR1NG
                <New />
              </>
            }
          >
            <div className="flex-container">
              <ItemIconWithoutTooltip
                item={ItemDataByName["活力块"]}
                size={64}
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["全复药"]}
                size={64}
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["高级球"]}
                size={64}
              />
            </div>
            <div className="flex-container">
              <div>
                <Link to="/i/活力块">活力块</Link>×5
              </div>
              <div>
                <Link to="/i/全复药">全复药</Link>×10
              </div>
              <div>
                <Link to="/i/高级球">高级球</Link>×10
              </div>
            </div>
            <div>
              <b>领取条件</b>：密语 PREPAR1NG
            </div>
            <div>
              <b>领取时间</b>：2025 年 12 月 4 日～2027 年 3 月 31 日
            </div>
          </Card>
        </div>
        <h3>已结束</h3>
        <div className="activity-card-container">
          <Card title="大型喷火龙（头目）">
            <div className="flex-container">
              <PokemonIcon
                pokemon={PokemonDataByName["喷火龙"]}
                link
              />
            </div>
            <div className="flex-container">
              <div>
                <Link to="/p/喷火龙">喷火龙</Link> Lv.36
              </div>
            </div>
            <div>
              <b>招式</b>：<Link to="/m/日光束">日光束</Link> <Link to="/m/喷射火焰">喷射火焰</Link>{" "}
              <Link to="/m/龙爪">龙爪</Link> <Link to="/m/空气之刃">空气之刃</Link>
            </div>
            <div>
              <b>领取条件</b>：密语 B1G0006
            </div>
            <div>
              <b>领取时间</b>：2025 年 12 月 9 日～2026 年 1 月 19 日
            </div>
          </Card>
          <div />
          <div />
          <div />
        </div>
      </div>

      <div className="section">
        <h2>对战报酬</h2>
        <p>对战报酬是每次对战结束后都可以获得的报酬。自第 2 赛季起，报酬内容包含了特殊精灵球。</p>
        <div className="grid text-md gap-4 lg:grid-cols-2 2xl:grid-cols-4">
          <Card title="第 1 名">
            <InternetBattleRewardsTable
              random={[
                { item: "速度球", quantity: 1, probability: 7 },
                { item: "等级球", quantity: 1, probability: 7 },
                { item: "诱饵球", quantity: 1, probability: 7 },
                { item: "沉重球", quantity: 1, probability: 7 },
                { item: "甜蜜球", quantity: 1, probability: 7 },
                { item: "友友球", quantity: 1, probability: 7 },
                { item: "月亮球", quantity: 1, probability: 7 },
                { item: "金色王冠", quantity: 1, probability: 10 },
                { item: "银色王冠", quantity: 2, probability: 30 },
                { item: "巨大金珠", quantity: 1, probability: 11 },
              ]}
              guaranteed={[
                { item: "金珠", quantity: 5, probability: 100 },
                { item: "神奇糖果", quantity: 3, probability: 100 },
              ]}
            />
          </Card>
          <Card title="第 2 名">
            <InternetBattleRewardsTable
              random={[
                { item: "速度球", quantity: 1, probability: 3 },
                { item: "等级球", quantity: 1, probability: 3 },
                { item: "诱饵球", quantity: 1, probability: 3 },
                { item: "沉重球", quantity: 1, probability: 3 },
                { item: "甜蜜球", quantity: 1, probability: 3 },
                { item: "友友球", quantity: 1, probability: 3 },
                { item: "月亮球", quantity: 1, probability: 3 },
                { item: "金色王冠", quantity: 1, probability: 1 },
                { item: "银色王冠", quantity: 1, probability: 29 },
                { item: "丸子珍珠", quantity: 1, probability: 49 },
              ]}
              guaranteed={[
                { item: "珍珠", quantity: 3, probability: 100 },
                { item: "神奇糖果", quantity: 1, probability: 100 },
              ]}
            />
          </Card>
          <Card title="第 3 名">
            <InternetBattleRewardsTable
              random={[
                { item: "神奇糖果", quantity: 1, probability: 2 },
                { item: "ＨＰ增强剂", quantity: 1, probability: 8 },
                { item: "攻击增强剂", quantity: 1, probability: 8 },
                { item: "防御增强剂", quantity: 1, probability: 8 },
                { item: "特攻增强剂", quantity: 1, probability: 8 },
                { item: "特防增强剂", quantity: 1, probability: 8 },
                { item: "速度增强剂", quantity: 1, probability: 8 },
                { item: "金珠", quantity: 1, probability: 10 },
                { item: "银色王冠", quantity: 1, probability: 10 },
                { item: "大珍珠", quantity: 1, probability: 30 },
              ]}
              guaranteed={[{ item: "珍珠", quantity: 1, probability: 100 }]}
            />
          </Card>
          <Card title="第 4 名">
            <InternetBattleRewardsTable
              random={[
                { item: "经验糖果Ｓ", quantity: 1, probability: 2 },
                { item: "体力之羽", quantity: 1, probability: 8 },
                { item: "肌力之羽", quantity: 1, probability: 8 },
                { item: "抵抗之羽", quantity: 1, probability: 8 },
                { item: "智力之羽", quantity: 1, probability: 8 },
                { item: "精神之羽", quantity: 1, probability: 8 },
                { item: "瞬发之羽", quantity: 1, probability: 8 },
                { item: "精通种子", quantity: 1, probability: 10 },
                { item: "小蘑菇", quantity: 1, probability: 10 },
                { item: "美丽之羽", quantity: 1, probability: 30 },
              ]}
              guaranteed={[{ item: "小蘑菇", quantity: 1, probability: 100 }]}
            />
          </Card>
        </div>
      </div>

      <div className="section">
        <h2>升级报酬</h2>
        <p>
          升级报酬是级别提升至下一级时可以获得的报酬，在级别提升后立即发放。自第 4
          赛季起，赛季报酬中的特殊精灵球被移除，改为在升级报酬中发放。
        </p>
        <Spin spinning={loading}>
          <div className="activity-card-container">{promotionRewards}</div>
        </Spin>
        <h3>固定奖励</h3>
        <div className="activity-card-container">
          <RewardCardLite
            season="第 4 赛季起"
            rewards={[
              {
                levels: "Ｆ、Ｇ、Ｈ",
                items: [
                  {
                    item: "金珠",
                    quantity: 4,
                  },
                  {
                    item: "经验糖果Ｌ",
                    quantity: 5,
                  },
                ],
              },
              {
                levels: "Ｊ、Ｋ、Ｌ",
                items: [
                  {
                    item: "金珠",
                    quantity: 3,
                  },
                  {
                    item: "经验糖果Ｌ",
                    quantity: 4,
                  },
                ],
              },
              {
                levels: "Ｎ",
                items: [
                  {
                    item: "超级碎片",
                    quantity: 200,
                  },
                ],
              },
              {
                levels: "Ｏ",
                items: [
                  {
                    item: "金珠",
                    quantity: 2,
                  },
                  {
                    item: "经验糖果Ｌ",
                    quantity: 3,
                  },
                ],
              },
              {
                levels: "Ｐ",
                items: [
                  {
                    item: "超级碎片",
                    quantity: 200,
                  },
                ],
              },
              {
                levels: "Ｑ",
                items: [
                  {
                    item: "金珠",
                    quantity: 2,
                  },
                  {
                    item: "经验糖果Ｌ",
                    quantity: 3,
                  },
                ],
              },
              {
                levels: "Ｒ",
                items: [
                  {
                    item: "超级碎片",
                    quantity: 200,
                  },
                ],
              },
              {
                levels: "Ｔ到Ｘ",
                items: [
                  {
                    item: "经验糖果Ｓ",
                    quantity: 1,
                  },
                ],
              },
              {
                levels: "Ｙ",
                items: [
                  {
                    item: "经验糖果ＸＳ",
                    quantity: 1,
                  },
                ],
              },
            ]}
          />
          <div />
        </div>
      </div>

      <div className="section">
        <h2>赛季报酬</h2>
        <p>
          赛季报酬是根据赛季结束时的所在级别可以获得的报酬，在赛季结束后发放。自第 4
          赛季起，赛季报酬中的特殊精灵球被移除，改为在升级报酬中发放。
        </p>
        <h3>特殊精灵球</h3>
        <Spin spinning={loading}>
          <div className="activity-card-container">{seasonRewards}</div>
        </Spin>
        <h3>固定奖励</h3>
        <div className="activity-card-container">
          <RewardCardLite
            season="第 1～3 赛季"
            rewards={[
              {
                levels: "Ａ",
                items: [
                  {
                    item: "金色王冠",
                    quantity: 1,
                  },
                  {
                    item: "银色王冠",
                    quantity: 3,
                  },
                  {
                    item: "精通种子",
                    quantity: 3,
                  },
                  {
                    item: "巨大金珠",
                    quantity: 1,
                  },
                ],
              },
              {
                levels: "Ｅ～Ｂ",
                items: [
                  {
                    item: "金色王冠",
                    quantity: 1,
                  },
                  {
                    item: "银色王冠",
                    quantity: 2,
                  },
                  {
                    item: "精通种子",
                    quantity: 2,
                  },
                  {
                    item: "金珠",
                    quantity: 2,
                  },
                ],
              },
              {
                levels: "Ｋ～Ｆ",
                items: [
                  {
                    item: "银色王冠",
                    quantity: 1,
                  },
                  {
                    item: "精通种子",
                    quantity: 1,
                  },
                  {
                    item: "金珠",
                    quantity: 2,
                  },
                ],
              },
              {
                levels: "Ｒ～Ｌ",
                items: [
                  {
                    item: "精通种子",
                    quantity: 1,
                  },
                  {
                    item: "金珠",
                    quantity: 1,
                  },
                ],
              },
              {
                levels: "Ｓ以下",
                items: [
                  {
                    item: "金珠",
                    quantity: 1,
                  },
                ],
              },
            ]}
          />
          <RewardCardLite
            season="第 4 赛季起"
            rewards={[
              {
                levels: "Ａ",
                items: [
                  {
                    item: "金色王冠",
                    quantity: 3,
                  },
                  {
                    item: "银色王冠",
                    quantity: 5,
                  },
                  {
                    item: "精通种子",
                    quantity: 3,
                  },
                  {
                    item: "巨大金珠",
                    quantity: 1,
                  },
                ],
              },
              {
                levels: "Ｂ～Ｅ",
                items: [
                  {
                    item: "金色王冠",
                    quantity: 2,
                  },
                  {
                    item: "银色王冠",
                    quantity: 3,
                  },
                  {
                    item: "精通种子",
                    quantity: 2,
                  },
                  {
                    item: "金珠",
                    quantity: 2,
                  },
                ],
              },
              {
                levels: "Ｆ～Ｉ",
                items: [
                  {
                    item: "金色王冠",
                    quantity: 1,
                  },
                  {
                    item: "银色王冠",
                    quantity: 2,
                  },
                  {
                    item: "精通种子",
                    quantity: 1,
                  },
                  {
                    item: "金珠",
                    quantity: 2,
                  },
                ],
              },
              {
                levels: "Ｊ～Ｍ",
                items: [
                  {
                    item: "银色王冠",
                    quantity: 1,
                  },
                  {
                    item: "精通种子",
                    quantity: 1,
                  },
                  {
                    item: "金珠",
                    quantity: 2,
                  },
                ],
              },
              {
                levels: "Ｎ～Ｒ",
                items: [
                  {
                    item: "精通种子",
                    quantity: 1,
                  },
                  {
                    item: "金珠",
                    quantity: 1,
                  },
                ],
              },
              {
                levels: "Ｓ以下",
                items: [
                  {
                    item: "金珠",
                    quantity: 1,
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ActivityPage;
