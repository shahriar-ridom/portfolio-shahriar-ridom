import {
  Code,
  Palette,
  FileJson,
  MonitorPlay,
  Server,
  Database,
  Layers,
  Box,
  Cloud,
  GitBranch,
  LucideIcon,
} from "lucide-react";

export const IconMap: Record<string, LucideIcon> = {
  Code,
  Palette,
  FileJson,
  MonitorPlay,
  Server,
  Database,
  Layers,
  Box,
  Cloud,
  GitBranch,
  Default: Code,
};

export const getIcon = (name: string) => IconMap[name] || IconMap.Default;
