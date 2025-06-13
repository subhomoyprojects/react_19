export default function PropsUsage() {
  return (
    <>
      <PassingProps fullName={"Subhomoy Pal"} age={35} aboutMyself={<h3>I am current employ of the Webskitters</h3>}>
        <h1>Testing that it show or not</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas neque magni nam, quisquam voluptates alias facere delectus, corrupti incidunt, eaque mollitia dolore est temporibus possimus molestiae earum pariatur! Magnam!</p>
      </PassingProps>
    </>
  );
}

export function PassingProps({ fullName, age, aboutMyself, children }) {
  return (
    <>
      <h1>Name: {fullName}</h1>
      <h2>Age {age}</h2>
      <div>Description {aboutMyself}</div>
      <div>Testing children access or not: {children}</div>
    </>
  );
}
