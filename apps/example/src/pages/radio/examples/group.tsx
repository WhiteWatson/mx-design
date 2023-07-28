import { Group } from '../locale';

const code = `
import { Radio } from '@mx-design/web';

function App() {
  const RadioGroup = Radio.Group;
  const options = [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3',
    },
    {
      label: 'Option 4',
      value: '4',
      disabled: true
    },
  ];

  return (
      <div>
        <RadioGroup
          direction='vertical'
          options={options}
        />
      </div>
  );
};`;

export const group = {
  code,
  namespace: Group,
};
