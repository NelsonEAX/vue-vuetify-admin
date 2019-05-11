const steps = [
  {
    element: '.hamburger-container',
    popover: {
      title: 'Hamburger',
      description: 'Open && Close sidebar',
      position: 'bottom'
    }
  },
  {
    element: '.breadcrumbs-container',
    popover: {
      title: 'Breadcrumb',
      description: 'Indicate the current page location',
      position: 'bottom'
    }
  },
  {
    element: '.fullscreen-container',
    popover: {
      title: 'Screenfull',
      description: 'Bring the page into fullscreen',
      position: 'left'
    }
  },
  {
    element: '.notification-container',
    popover: {
      title: 'System notification',
      description: '########################',
      position: 'left'
    }
  },
  {
    element: '.localization-container',
    popover: {
      title: 'Switch language',
      description: 'Switch the system language',
      position: 'left'
    }
  },
  {
    element: '.profile-container',
    popover: {
      title: 'Profile',
      description: '########################',
      position: 'left'
    }
  },
  {
    element: '#app-fab-btn',
    popover: {
      title: 'Fab Settings',
      description: '########################',
      position: 'left'
    },
    padding: 0
  }
];

export default steps;
