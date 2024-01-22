import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <h1>Main App</h1>
      <ul>
        <li>
          <NavLink
            to='/'
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                color: isPending ? 'red' : 'black',
                viewTransitionName: isTransitioning ? 'slide' : '',
              };
            }}
          >
            {' '}
            Home{' '}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                color: isPending ? 'red' : 'black',
                viewTransitionName: isTransitioning ? 'slide' : '',
              };
            }}
          >
            {' '}
            About{' '}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                color: isPending ? 'red' : 'black',
                viewTransitionName: isTransitioning ? 'slide' : '',
              };
            }}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
