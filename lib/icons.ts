// lib/icons.tsx
import {
  Code, Palette, FileJson, MonitorPlay,
  Server, Database, Layers, Box, Cloud, GitBranch
} from "lucide-react";

export const IconMap: Record<string, any> = {
  Code, Palette, FileJson, MonitorPlay,
  Server, Database, Layers, Box, Cloud, GitBranch,
  // Add defaults
  Default: Code
};

export const getIcon = (name: string) => IconMap[name] || IconMap.Default;
