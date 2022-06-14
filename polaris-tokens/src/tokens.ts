import {breakpoints as breakpointsTokens} from './token-groups/breakpoints';
import {depth as depthTokens} from './token-groups/depth';
import {legacy as legacyTokens} from './token-groups/legacy';
import {colors as colorsTokens} from './token-groups/colors';
import {motion as motionTokens} from './token-groups/motion';
import {shape as shapeTokens} from './token-groups/shape';
import {spacing as spacingTokens} from './token-groups/spacing';
import {typography as typographyTokens} from './token-groups/typography';
import {zIndex as zIndexTokens} from './token-groups/zIndex';
import {tokensToRems} from './utilities';

export interface TokenProperties {
  description?: string;
  value: string;
}

export interface TokenGroup {
  [token: string]: TokenProperties;
}

export interface Tokens {
  breakpoints: TokenGroup;
  colors: TokenGroup;
  depth: TokenGroup;
  legacy: TokenGroup;
  motion: TokenGroup;
  shape: TokenGroup;
  spacing: TokenGroup;
  typography: TokenGroup;
  zIndex: TokenGroup;
}

export const breakpoints: TokenGroup = tokensToRems(breakpointsTokens);
export const colors: TokenGroup = colorsTokens;
export const depth: TokenGroup = depthTokens;
export const legacy: TokenGroup = tokensToRems(legacyTokens);
export const motion: TokenGroup = tokensToRems(motionTokens);
export const shape: TokenGroup = tokensToRems(shapeTokens);
export const spacing: TokenGroup = tokensToRems(spacingTokens);
export const typography: TokenGroup = tokensToRems(typographyTokens);
export const zIndex: TokenGroup = zIndexTokens;

export const tokens: Tokens = {
  breakpoints,
  colors,
  depth,
  legacy,
  motion,
  shape,
  spacing,
  typography,
  zIndex,
};
