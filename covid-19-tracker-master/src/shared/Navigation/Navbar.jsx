import React from 'react';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'sticky', top: 0 , zIndex:'1000'}}>
      <a className="navbar-brand" href="/">Statistics of COVID-19</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-light" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-light" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="/news">Local News <span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="/map">Local District Distribution <span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="/hospitaldetails">Hospital Details <span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="/other">Other Countries <span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="/compare">Country Comparison <span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="/graph">Time-series Data Curve <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="https://gihanrcg.github.io/">Developed By</a>
          </li>
        </ul>

      </div>
    </nav>

    // <AppBar position="static" color="dark">
    //   <Toolbar>
    //     <Typography variant="h6" className={classes.title} noWrap>
    //       COVID - 19 Statistics
    //     </Typography>

    //     <MenuItem component={Link} to="/">
    //       Dashboard
    //     </MenuItem>

    //     {/* <MenuItem component={Link} to="/hospitals">
    //       Hospitals
    //     </MenuItem> */}
    //   </Toolbar>
    // </AppBar>
  );
}



export default Navbar;
