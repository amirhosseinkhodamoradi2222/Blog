function MyRoute(props) {
    return <h1>{props.query.myParam}</h1>
  }
  
  MyRoute.getInitialProps = ({ query }) => {
    return { query }
  }
  