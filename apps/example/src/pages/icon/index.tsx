import React, { useMemo } from 'react';
import { exampleList } from './examples';
import { useLocale } from '@/locale/useLocal/useLocal';
import { NAME_SPACE_ICON } from './locale';
import ComponentInnerLayout from '@/components/Layout/ComponentInnerLayout';
import { ComponentCodeBlock, ComponentBlock } from '@/components/DemoBlock';

function IconExample() {
  const [local] = useLocale<typeof NAME_SPACE_ICON>({ namespace: NAME_SPACE_ICON });
  const dataList = useMemo(
    () =>
      Object.keys(local).map((key) => ({
        ...local[key],
        ...exampleList[key],
      })),
    [local, exampleList]
  );

  const titleList = useMemo(
    () =>
      dataList.map((item) => ({
        title: item.title,
        href: `#${item.namespace}`,
      })),
    [dataList]
  );

  return (
    <ComponentInnerLayout titleList={titleList}>
      {dataList.map((data) =>
        data?.component ? <ComponentBlock key={data.namespace} {...data} /> : <ComponentCodeBlock key={data.namespace} {...data} />
      )}
    </ComponentInnerLayout>
  );
}
export default IconExample;
