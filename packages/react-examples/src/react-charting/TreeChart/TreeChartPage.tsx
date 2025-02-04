import * as React from 'react';

import {
  ComponentPage,
  ExampleCard,
  IComponentDemoPageProps,
  PropertiesTableSet,
} from '@fluentui/react-docsite-components';

import { TreeChartTwoLayerExample } from './TreeChart.TwoLayer.Example';
import { TreeChartThreeLayerLongExample } from './TreeChart.ThreeLayerLong.Example';
import { TreeChartThreeLayerCompactExample } from './TreeChart.ThreeLayerCompact.Example';

const TreeChartTwoLayerExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/TreeChart/TreeChart.TwoLayer.Example.tsx') as string;
const TreeChartThreeLayerLongExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/TreeChart/TreeChart.ThreeLayerLong.Example.tsx') as string;
const TreeChartThreeLayerCompactExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/TreeChart/TreeChart.ThreeLayerCompact.Example.tsx') as string;

export class TreeChartPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Tree Chart"
        componentName="TreeChartExample"
        exampleCards={
          <div>
            <ExampleCard title="TreeChart Two-Layer" code={TreeChartTwoLayerExampleCode}>
              <TreeChartTwoLayerExample />
            </ExampleCard>
            <ExampleCard title="TreeChart Three-Layer long" code={TreeChartThreeLayerLongExampleCode}>
              <TreeChartThreeLayerLongExample />
            </ExampleCard>
            <ExampleCard title="TreeChart Three-Layer compact" code={TreeChartThreeLayerCompactExampleCode}>
              <TreeChartThreeLayerCompactExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<string>('!raw-loader?esModule=false!@fluentui/react-charting/src/components/TreeChart/TreeChart.types.ts'),
            ]}
          />
        }
        isHeaderVisible={this.props.isHeaderVisible}
        overview={
          <div>
            <p>Tree chart</p>
          </div>
        }
      />
    );
  }
}
