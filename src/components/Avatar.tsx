import React from "react";
import { Box } from "grommet";
import { User } from "."

type AvatarProps = User


export const Avatar: React.FC<AvatarProps> = ({ name, thumbnail, ...rest }) => (
  <Box
    a11yTitle={`${name} avatar`}
    height="avatar"
    width="avatar"
    round="full"
    background={`url(${thumbnail})`}
    {...rest}
  />
);
