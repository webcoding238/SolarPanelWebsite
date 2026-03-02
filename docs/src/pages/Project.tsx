import { Pie, PieChart, Line, LineChart, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ZAxis, /*TooltipIndex,*/ Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, ComposedChart, Area, Bar } from 'recharts'
import Navigation from '../navigation/Navigation'
import Footer from '../navigation/Footer'
import ChatWindow from '../navigation/ChatWindow'
import ProjectTagIcon from '../assets/ProjectTagIcon.svg'

const projectStyles = {
  main: {
    backgroundColor: 'lightskyblue',
  },
  projectsTitle: {
    paddingLeft: '2em',
    marginTop: '30px',
    backgroundColor: 'white',
    fontSize: '64px',
    zIndex: '1000'
  },
  projectsSummary: {
    marginLeft: '5em',
    marginTop: '2em',
    backgroundColor: 'white',
    padding: '5px',
    fontSize: '24px',
    width: '38vw',
    zIndex: '1000'
  },
  projects: {
    display: 'flex',
    flexDirection: 'row' as  const,
    flexWrap: 'wrap' as const
  },
  projectCardWrapper: {
    height: '30em',
    width: '20em',
    borderRadius: '20px',
    backgroundColor: 'white',
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
    fontSize: '14px'
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

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

const dataScatter = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const dataRadar = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
   {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

const dataResponsive = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
]

const Project: React.FC = ({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: any /*TooltipIndex*/;
}) => {

  return (
    <>
      <Navigation />
      <main style={projectStyles.main}>
        <ChatWindow />
        <div style={projectStyles.projectsTitle}>Solar Industry Projects - Highlighted Insights</div>
        <div style={projectStyles.projectsSummary}>
          Key projects in the solar industry are aimed at improving 
          efficiency and speed to market. There are also statistical
          analysis studies to reference for key decision making.
          Various industry contract leaders are in the projection
          phase of investigating the most effective organization
          options for managerial groups before then applying and 
          seeking more effective statistics through fast,
          plotted webs of human capital.
        </div>
        <div style={projectStyles.projects}>
          <div style={projectStyles.projectCardWrapper}>
              <div style={projectStyles.cardTitleIcon} >
                <img
                  src={ProjectTagIcon}
                  alt="Cartoon outline of schedule calendar"
                  width='100' height='60'
                  />
              </div>
              <div style={projectStyles.cardTitle}>
                <h2>Project Title</h2>
              </div>
              <div style={projectStyles.cardSummary}>
                <p>Project G began in the western region in Aug. 2021. Studies were conducted
                  on the improvement in watts returned based on scalable battery grids.
                  The investment has had a savings from infrastructure costs
                  with a 15 year half-life at current ratios.
                </p>
              </div>
              <div style={projectStyles.cardData}>
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
              </div>
          </div>
          <div style={projectStyles.projectCardWrapper}>
            <div style={projectStyles.cardTitleIcon} >
              <img
                src={ProjectTagIcon}
                alt="Cartoon outline of schedule calendar"
                width='100' height='60'
                />
            </div>
            <div style={projectStyles.cardTitle}>
              <h2>Project Title</h2>
            </div>
            <div style={projectStyles.cardSummary}>
              <p>Project G began in the western region in Aug. 2021. Studies were conducted
                on the improvement in watts returned based on scalable battery grids.
                The investment has had a savings from infrastructure costs
                with a 15 year half-life at current ratios.
              </p>
            </div>
            <div style={projectStyles.cardData}>
              <LineChart
                style={projectStyles.chartStyles}
                responsive
                data={data}
                >
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </div>
          </div>
          <div style={projectStyles.projectCardWrapper}>
            <div style={projectStyles.cardTitleIcon} >
              <img
                src={ProjectTagIcon}
                alt="Cartoon outline of schedule calendar"
                width='100' height='60'
                />
            </div>
            <div style={projectStyles.cardTitle}>
              <h2>Project Title</h2>
            </div>
            <div style={projectStyles.cardSummary}>
              <p>Project G began in the western region in Aug. 2021. Studies were conducted
                on the improvement in watts returned based on scalable battery grids.
                The investment has had a savings from infrastructure costs
                with a 15 year half-life at current ratios.
              </p>
            </div>
            <div style={projectStyles.cardData}>
              <div style={projectStyles.scatterSize}>
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
                </div>
            </div>
          </div>
          <div style={projectStyles.projectCardWrapper}>
            <div style={projectStyles.cardTitleIcon} >
              <img
                src={ProjectTagIcon}
                alt="Cartoon outline of schedule calendar"
                width='100' height='60'
                />
            </div>
            <div style={projectStyles.cardTitle}>
              <h2>Project Title</h2>
            </div>
            <div style={projectStyles.cardSummary}>
              <p>Project G began in the western region in Aug. 2021. Studies were conducted
                on the improvement in watts returned based on scalable battery grids.
                The investment has had a savings from infrastructure costs
                with a 15 year half-life at current ratios.
              </p>
            </div>
            <div style={projectStyles.cardData}>
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
            </div>
          </div>
          <div style={projectStyles.projectCardWrapper}>
            <div style={projectStyles.cardTitleIcon} >
              <img
                src={ProjectTagIcon}
                alt="Cartoon outline of schedule calendar"
                width='100' height='60'
                />
            </div>
            <div style={projectStyles.cardTitle}>
              <h2>Project Title</h2>
            </div>
            <div style={projectStyles.cardSummary}>
              <p>Project G began in the western region in Aug. 2021. Studies were conducted
                on the improvement in watts returned based on scalable battery grids.
                The investment has had a savings from infrastructure costs
                with a 15 year half-life at current ratios.
              </p>
            </div>
            <div style={projectStyles.cardData}>
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Project