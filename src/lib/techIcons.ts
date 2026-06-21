import type { ElementType } from "react";
import {
  SiBitbucket,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { DiJava } from "react-icons/di";
import { TbBrandAzure, TbBrandVscode } from "react-icons/tb";
import { Network, Rocket } from "lucide-react";

export const TECH_ICONS: Record<string, ElementType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  reactNative: SiReact,
  flutter: SiFlutter,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  java: DiJava,
  spring: SiSpringboot,
  graphql: SiGraphql,
  restApi: Network,
  mongodb: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
  aws: FaAws,
  docker: SiDocker,
  githubActions: SiGithubactions,
  deploygate: Rocket,
  git: SiGit,
  github: SiGithub,
  bitbucket: SiBitbucket,
  jira: SiJira,
  azure: TbBrandAzure,
  vscode: TbBrandVscode,
};
