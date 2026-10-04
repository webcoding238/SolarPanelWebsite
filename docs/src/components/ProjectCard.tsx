import {
    Pie,
    PieChart,
    Line,
    LineChart,
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LabelList,
    ZAxis,
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    ComposedChart,
    Area,
    Bar
} from 'recharts'
import ProjectTagImage from '../assets/ProjectTagIcon.svg'
import {
    data,
    data01,
    data02,
    dataScatter,
    dataRadar,
    dataResponsive
} from '../pages/Project/cardData'

const projectStyles = {
  projectCardWrapper: {
    height: '30em',
    width: '20em',
    borderRadius: '20px',
    backgroundColor: 'white',
    color: 'black',
    padding: '15px',
    boxShadow: '25px 35px',
    position: 'relative' as const,
    border: '2px solid grey',
    margin: '5em',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '15% 15% 70%',
    gap: '5px'
  },
  cardTitleIcon: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '2'
  },
  cardTitle: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
    textAlign: 'center' as const
  },
  cardSummary: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '2',
    fontSize: '14px',
    overflowWrap: 'anywhere' as const
  },
  cardData: {
    paddingTop: '2em',
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '3',
    gridRowEnd: '3',
  },
  chartStyles: {
    width: '100%',
    height: '100%',
    maxWidth: '500px',
    maxHeight: '80vh',
    aspectRatio: 1,
    margin: 'auto',
    position: 'relative' as const
  },
  scatterSize: {
    marginTop: '3em',
    width: '80%',
    heigh: '80%'
  }
}

const ProjectCard: React.FC = ({
    title,
    summary,
    chartType,
    isAnimationActive,
    defaultIndex
    }) => {

  return (
    <>
        <div style={projectStyles.projectCardWrapper}>
            <div style={projectStyles.cardTitleIcon}>
            <img
                src={ProjectTagImage}
                type='module/text/javascript'
                alt='Cartoon outline of schedule calendar'
                width='100' height='60'
                />
            </div>
            <div style={projectStyles.cardTitle}>
            <h2>{title}</h2>
            </div>
            <div style={projectStyles.cardSummary}>
            <p>{summary}</p>
            </div>
            <div style={projectStyles.cardData}>
                {chartType === 'pie' && (
                    <PieChart style={projectStyles.chartStyles} responsive>
                        <Pie
                            data={data01}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            outerRadius="50%"
                            fill="#8884d8"
                            isAnimationActive={isAnimationActive}
                        />
                        <Pie
                            data={data02}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius="60%"
                            outerRadius="80%"
                            fill="#82ca9d"
                            label
                            isAnimationActive={isAnimationActive}
                        />
                        <Tooltip defaultIndex={defaultIndex} />
                    </PieChart>
                )}
                {chartType === 'line' && (
                    <LineChart
                        style={projectStyles.chartStyles}
                        responsive
                        data={data}
                        >
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                )}
                {chartType === 'scatter' && (
                    <ScatterChart
                        style={projectStyles.chartStyles}
                        responsive
                        margin={{
                        top: 20,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                        <YAxis type="number" dataKey="y" name="weight" unit="kg" width="auto" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
                        <Scatter name="A school" data={dataScatter} fill="#8884d8" activeShape={{ fill: 'green' }}>
                        <LabelList dataKey="x" fill="black" />
                        </Scatter>
                        <ZAxis range={[900, 4000]} dataKey="z" />
                    </ScatterChart>
                )}
                {chartType === 'radar' && (
                    <RadarChart
                        style={projectStyles.chartStyles}
                        responsive
                        outerRadius="80%"
                        data={dataRadar}
                        >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                )}
                {chartType === 'composedChart' && (
                    <ResponsiveContainer>
                        <ComposedChart
                        width={500}
                        height={400}
                        data={dataResponsive}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                        >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    </>
  )
}

export default ProjectCard