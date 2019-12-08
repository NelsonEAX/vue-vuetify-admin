const steps = [
  {
    element: '#app-drawer',
    popover: {
      title: 'Navbar',
      description: 'Application navigation',
      position: 'right',
    },
  },
  {
    element: '#hamburger-container',
    popover: {
      title: 'Hamburger',
      description: 'Open && Close sidebar',
      position: 'bottom',
    },
  },
  {
    element: '#breadcrumbs-container',
    popover: {
      title: 'Breadcrumb',
      description: 'Indicate the current page location',
      position: 'bottom',
    },
  },
  {
    element: '#fullscreen-container',
    popover: {
      title: 'Screenfull',
      description: 'Bring the page into fullscreen',
      position: 'left',
    },
  },
  {
    element: '#notification-container',
    popover: {
      title: 'System notification',
      description: 'System and user messages',
      position: 'left',
    },
  },
  {
    element: '#localization-container',
    popover: {
      title: 'Switch language',
      description: 'Switch the system language',
      position: 'left',
    },
  },
  {
    element: '#profile-container',
    popover: {
      title: 'Profile',
      description: 'User information && actions',
      position: 'left',
    },
  },
  {
    element: '#app-fab-btn',
    popover: {
      title: 'Fab Settings',
      description: 'Application settings',
      position: 'left',
    },
    padding: 0,
  },
];

export default steps;
