const Header = (props) => {
  return <h1>{props.course.name}</h1>
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
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  return (
    <p>
      Total units: {parts[0].units + parts[1].units + parts[2].units}
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
  const course = {
    name: 'CSIT340',
    parts: [
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
  }
  const name = 'Cassius L. Cenas'
  const code = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App
