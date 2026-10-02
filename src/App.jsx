const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.units} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} units={props.units1} />
      <Part part={props.part2} units={props.units2} />
      <Part part={props.part3} units={props.units3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.units1 + props.units2 + props.units3}</p>
}

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.code} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340'
  const part1 = 'IT317'
  const units1 = 3
  const part2 = 'IT365'
  const units2 = 3
  const part3 = 'CSIT321'
  const units3 = 3
  const name = 'Cassius L. Cenas'
  const code = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />
      <Total units1={units1} units2={units2} units3={units3} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App
