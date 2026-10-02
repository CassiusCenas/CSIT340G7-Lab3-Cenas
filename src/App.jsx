const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.units} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.part1.units + props.part2.units + props.part3.units}
    </p>
  )
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
  const part1 = {
    name: 'IT317',
    units: 3
  }
  const part2 = {
    name: 'IT365',
    units: 3
  }
  const part3 = {
    name: 'CSIT321',
    units: 3
  }
  const name = 'Cassius L. Cenas'
  const code = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App
