// Components.d.ts — the complete catalog of the 9 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.BossIcons) and usable directly in JSX.
import * as React from 'react';

// figma layer: "boss_icons" (node 1:646)
export interface BossIconsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "dialogue_box_01" (node 1:1023)
export interface DialogueBox01Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "dialogue_box_02" (node 1:1024)
export interface DialogueBox02Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "dialogue_box_03" (node 1:1027)
export interface DialogueBox03Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "dialogue_box_04" (node 1:1028)
export interface DialogueBox04Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Dialogue_box_05" (node 1:950)
export interface DialogueBox05Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "general icons" (node 1:656)
export interface GeneralIconsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "map_details_fairy_land" (node 1:605)
export interface MapDetailsFairyLandProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "New skill / Level Up" (node 1:898)
export interface NewSkillLevelUpProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const BossIcons: React.FC<BossIconsProps>;
declare const DialogueBox01: React.FC<DialogueBox01Props>;
declare const DialogueBox02: React.FC<DialogueBox02Props>;
declare const DialogueBox03: React.FC<DialogueBox03Props>;
declare const DialogueBox04: React.FC<DialogueBox04Props>;
declare const DialogueBox05: React.FC<DialogueBox05Props>;
declare const GeneralIcons: React.FC<GeneralIconsProps>;
declare const MapDetailsFairyLand: React.FC<MapDetailsFairyLandProps>;
declare const NewSkillLevelUp: React.FC<NewSkillLevelUpProps>;
declare global {
  interface Window {
    BossIcons: React.FC<BossIconsProps>;
    DialogueBox01: React.FC<DialogueBox01Props>;
    DialogueBox02: React.FC<DialogueBox02Props>;
    DialogueBox03: React.FC<DialogueBox03Props>;
    DialogueBox04: React.FC<DialogueBox04Props>;
    DialogueBox05: React.FC<DialogueBox05Props>;
    GeneralIcons: React.FC<GeneralIconsProps>;
    MapDetailsFairyLand: React.FC<MapDetailsFairyLandProps>;
    NewSkillLevelUp: React.FC<NewSkillLevelUpProps>;
  }
}
