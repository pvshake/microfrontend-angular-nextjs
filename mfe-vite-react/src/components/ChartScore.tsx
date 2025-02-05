import { TrendingUp } from 'lucide-react'
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { Models } from '../../../shared/types/Cliente'

interface ScoreChartData {
  score: number
  cliente: Models.Cliente
}

const chartConfig = {
  score: {
    label: 'Score'
  }
} satisfies ChartConfig

const getColor = (score: number) => {
  if (score < 500) return '#FF4D4F'
  if (score < 800) return '#FAAD14'
  return '#52C41A'
}

const ChartScore = ({ score, cliente }: ScoreChartData) => {
  const endAngle = (score / 1000) * 360

  return (
    <Card className="flex flex-col shadow-lg mt-6">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-3xl text-center">
          {score < 500
            ? '😢 Inapto'
            : score >= 500 && score < 800
              ? '🙂 Apto Parcialmente'
              : '🥳 Apto'}
        </CardTitle>
        <CardDescription className="text-xl text-center">
          {score < 500
            ? `${cliente?.nomeCompleto
                ?.split(' ')
                .shift()} infelizmente não pode solicitar crédito.`
            : score >= 500 && score < 800
              ? `${cliente?.nomeCompleto
                  ?.split(' ')
                  .shift()} está parcialmente apto para solicitar crédito!`
              : `${cliente?.nomeCompleto
                  ?.split(' ')
                  .shift()} está apto para solicitar crédito!`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={[{ value: 100 }]}
            startAngle={0}
            endAngle={endAngle}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              polarRadius={[0, 0.5]}
            />
            <RadialBar
              dataKey="value"
              cornerRadius={10}
              fill={getColor(score)}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {score.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Score
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ChartScore
