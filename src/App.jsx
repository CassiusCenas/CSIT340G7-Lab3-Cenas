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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units:{' '}
      {props.parts[0].units + props.parts[1].units + props.parts[2].units}
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
  const parts = [
    {
      name: 'IT317',
      units: 3
    },
    {
      name: 'IT365',
      units: 3
    },
    {
      name: 'CSIT321',
      units: 3
    }
  ]
  const name = 'Cassius L. Cenas'
  const code = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App
