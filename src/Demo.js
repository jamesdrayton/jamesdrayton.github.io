const Demo = ({project}) => {

    return ( 
        <div className="page" style={{
            display: project.display,
            opacity: project.opacity
          }}>
            <h1>{project.name}</h1>
          </div>
     );
}
 
export default Demo;