import { Card } from "antd";
import React, { FC, Fragment, useEffect } from "react";

import { ItemIconWithoutTooltip, ItemRewardsTable, PokemonIcon } from "@/components";
import { ItemDataByName, PokemonDataByName } from "@/data";
import { IItemReward } from "@/types";
import { DEFAULT_TITLE, Link } from "@/utils";

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

const ActivityPage: React.FC = () => {
  useEffect(() => {
    document.title = `联网活动 - ${DEFAULT_TITLE}`;
  }, []);

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
        <div className="grid text-md gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]">
          <Card title="拥有沙奈朵进化石的拉鲁拉丝">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <PokemonIcon
                pokemon={PokemonDataByName["拉鲁拉丝"]}
                link
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["沙奈朵进化石"]}
                size={64}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
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
              <b>领取时间</b>：2025年10月16日～2026年2月28日
            </div>
          </Card>
          <Card title="100 个精灵球">
            <div className="flex flex-wrap items-center justify-center gap-2">
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
              <b>序列号领取时间</b>：2025年10月16日～2026年2月28日
            </div>
            <div>
              <b>序列号有效时间</b>：2025年10月16日～2026年3月10日
            </div>
          </Card>
          <Card title="精灵球豪华组合">
            <div className="flex flex-wrap items-center justify-center gap-2">
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
            <div className="flex flex-wrap items-center justify-center gap-2">
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
              <b>序列号领取时间</b>：2025年10月16日～2026年2月28日
            </div>
            <div>
              <b>序列号有效时间</b>：2025年10月16日～2026年3月10日
            </div>
          </Card>
          <Card title="蒂安希进化石">
            <div className="flex flex-wrap items-center justify-center gap-2">
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
              <b>领取时间</b>：2025年11月6日～
            </div>
          </Card>
        </div>
      </div>

      <div className="section">
        <h2>互联网对战</h2>

        <h3>赛季奖励</h3>
        <div className="grid text-md gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]">
          <Card title="第 1 赛季">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <ItemIconWithoutTooltip
                item={ItemDataByName["甲贺忍蛙进化石"]}
                size={64}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div>
                K 级别：<Link to="/i/甲贺忍蛙进化石">甲贺忍蛙进化石</Link>×1
              </div>
            </div>
            <div>
              <b>举办时间</b>：2025年10月16日～2026年11月15日
            </div>
            <div>
              <b>其他奖励</b>：<Link to="https://plza-news.pokemon-home.com/sc/page/1.html">查看官网</Link>
            </div>
          </Card>
          <Card title="第 2 赛季">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <ItemIconWithoutTooltip
                item={ItemDataByName["甲贺忍蛙进化石"]}
                size={64}
              />
              <ItemIconWithoutTooltip
                item={ItemDataByName["妖火红狐进化石"]}
                size={64}
              />
            </div>
            <div className="text-center">
              Y 级别：<Link to="/i/甲贺忍蛙进化石">甲贺忍蛙进化石</Link>×1
            </div>
            <div className="text-center">
              S 级别：<Link to="/i/妖火红狐进化石">妖火红狐进化石</Link>×1
            </div>
            <div>
              <b>举办时间</b>：2025年11月6日～2026年11月26日
            </div>
            <div>
              <b>其他奖励</b>：<Link to="https://plza-news.pokemon-home.com/sc/page/5.html">查看官网</Link>
            </div>
          </Card>
          <Card title="第 4 赛季">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <ItemIconWithoutTooltip
                item={ItemDataByName["无"]}
                size={64}
              />
            </div>
            <div className="text-center">戟脊龙进化石×1</div>
          </Card>
        </div>

        <h3>对战奖励</h3>
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
    </Fragment>
  );
};

export default ActivityPage;
