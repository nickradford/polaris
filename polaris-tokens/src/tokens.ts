import {breakpoints as breakpointsTokens} from './token-groups/breakpoints';
import {depth as depthTokens} from './token-groups/depth';
import {legacy as legacyTokens} from './token-groups/legacy';
import {colors as colorsTokens} from './token-groups/colors';
import {motion as motionTokens} from './token-groups/motion';
import {shape as shapeTokens} from './token-groups/shape';
import {spacing as spacingTokens} from './token-groups/spacing';
import {typography as typographyTokens} from './token-groups/typography';
import {zIndex as zIndexTokens} from './token-groups/zIndex';
import {removeMetadata, tokensToRems} from './utilities';

export interface TokenGroup {
  [token: string]: string;
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

export const breakpoints: TokenGroup = removeMetadata(
  tokensToRems(breakpointsTokens),
);
export const colors: TokenGroup = removeMetadata(colorsTokens);
export const depth: TokenGroup = removeMetadata(depthTokens);
export const legacy: TokenGroup = removeMetadata(tokensToRems(legacyTokens));
export const motion: TokenGroup = removeMetadata(tokensToRems(motionTokens));
export const shape: TokenGroup = removeMetadata(tokensToRems(shapeTokens));
export const spacing: TokenGroup = removeMetadata(tokensToRems(spacingTokens));
export const typography: TokenGroup = removeMetadata(
  tokensToRems(typographyTokens),
);
export const zIndex: TokenGroup = removeMetadata(zIndexTokens);

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
