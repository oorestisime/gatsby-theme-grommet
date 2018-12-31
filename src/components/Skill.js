import React from 'react';
import { Box, Meter, Text } from 'grommet';

const Skill = ({ label, value }) => (
  <Box key={label} direction="row-responsive" gap="medium" margin={{ bottom: 'small', horizontal: 'medium' }}>
    <Text size="small" weight="bold">
      {label}
    </Text>
    <Meter
      round
      margin={{ right: 'xsmall' }}
      values={[
        {
          label,
          value,
          color: '#89bdd3',
        },
        {
          label,
          color: 'light-3',
          value: 100 - value,
        },
      ]}
    />
  </Box>
);

export default Skill;
