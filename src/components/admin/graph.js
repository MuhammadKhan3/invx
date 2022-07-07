import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jan',
    uv: 30,

  },
  {
    name: 'feb',
    uv: 20,

  },
  {
    name: 'mar',
    uv: 90,
  },
  {
    name: 'apr',
    uv: 30,
  },
  {
    name: 'may',
    uv: 40,
  },
  {
    name: 'jun',
    uv: 50,
  },
  {
    name: 'jul',
    uv: 60,
  },
  {
    name: 'Aug',
    uv: 70,
  },
  {
    name: 'Sep',
    uv: 80,
  },
  {
    name: 'Oct',
    uv: 90,
  },
  {
    name: 'Nov',
    uv: 90,
  },
  {
    name: 'Dec',
    uv: 100,
  },
];

export default class Inventory extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
    <>
      <ResponsiveContainer width="70%" height="80%" style={{float:'left'}}>
        <BarChart
          width={600}
          height={200}
          data={data}
          margin={{
            top: 65,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={16}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type='number' domain={[10, 100]} allowDataOverflow={true}/>
          <Tooltip />

          <Bar dataKey="uv"   barSize={15} fill="#60a5fa" plot style={{clipPath:'inset(0% 0% -2px 0% round 10px)'}} />
        </BarChart>
      </ResponsiveContainer>
      </>);
  }
}
