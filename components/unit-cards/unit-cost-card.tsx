import { Flex, Image, Stack, Text, Title } from "@mantine/core";
import { Fragment } from "react";
import { ResourceValues } from "../../src/unitStats";

const ResourceIcons = [
  { icon: "/icons/common/resources/resource_buildtime_extra.png", type: "time_seconds" },
  { icon: "/icons/common/resources/resource_manpower.png", type: "manpower" },
  { icon: "/icons/common/resources/resource_munition.png", type: "munition" },
  { icon: "/icons/common/resources/resource_fuel.png", type: "fuel" },
  { icon: "/icons/common/resources/resource_population.png", type: "popcap" },
  { icon: "/icons/common/resources/resource_skill_points.png", type: "command" },
] as const;

const ReinforceIcons = [
  { icon: "/icons/common/orders/reinforce.png", type: "cost" },
  { icon: "/icons/common/resources/resource_buildtime_extra.png", type: "time" },
] as const;

export const UnitCostCard = (costs: ResourceValues, title = "Costs") => (
  <>
    <Stack gap={0}>
      <Title order={6} style={{ textTransform: "uppercase" }}>
        {title}
      </Title>
      <Flex key="stats_costs_list" align="center" gap={8} mt={4} wrap="wrap">
        {ResourceIcons.map(({ icon, type }) => {
          return costs[type] ? (
            <Flex key={type} direction="row" align="center" gap={4}>
              <Image h={20} w={20} fit="contain" src={icon} alt={type} />
              <Text>{costs[type]}</Text>
            </Flex>
          ) : (
            <Fragment key={type}></Fragment>
          );
        })}
      </Flex>
    </Stack>
  </>
);

export const ReinforceCostCard = (
  reinforce: {
    time: number;
    cost: number;
  },
  title = "Reinforce",
) => (
  <>
    <Stack gap={0}>
      <Title order={6} tt="uppercase">
        {title}
      </Title>
      <Flex key="reinforce_costs_list" align="center" gap={8} mt={4} wrap="wrap">
        {ReinforceIcons.map(({ icon, type }) => {
          return reinforce[type] ? (
            <Flex key={type} direction="row" align="center" gap={4}>
              <Image h={20} w={20} fit="contain" src={icon} alt={type} />
              <Text>{reinforce[type]}</Text>
            </Flex>
          ) : (
            <Fragment key={type}></Fragment>
          );
        })}
      </Flex>
    </Stack>
  </>
);
