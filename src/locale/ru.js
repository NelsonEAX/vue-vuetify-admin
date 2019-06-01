export default {
  route: {
    dashboard: 'Главная',
    // introduction: 'Introduction',
    documentation: 'Документация',
    guide: 'Руководство',
    // pagePermission: 'Page Permission',
    // rolePermission: 'Role Permission',
    permission: 'Разрешения',
    permissions: {
      admin: 'Админ',
      editor: 'Редактор',
      visitor: 'Посетитель'
    },
    components: 'Компоненты',
    component: {
      avatarUpload: 'Avatar Upload',
      backToTop: 'Back To Top',
      countTo: 'Count To',
      dndList: 'Dnd List',
      dragDialog: 'Drag Dialog',
      dragKanban: 'Drag Kanban',
      dragSelect: 'DragSelect',
      dropzone: 'Dropzone',
      jsonEditor: 'Json Editor',
      markdown: 'Markdown',
      mixin: 'Mixin',
      splitPane: 'Split Pane',
      sticky: 'Sticky',
      tinymce: 'Tinymce'
    },
    vuetify: 'Vuetify',
    vuetifyComponents: {
      components: 'Components',
      alert: 'Alert',
      buttons: 'Buttons',
      calendar: 'Calendar',
      grid: 'Grid'
    },
    errors: 'Ошибки',
    errorPages: {
      page301: '301',
      page401: '401',
      page403: '403',
      page404: '404',
      page500: '500'
    },
    nested: {
      nested: 'Вложенные',
      nested1: 'Уровень 1',
      nested2: 'Уровень 2',
      nested3: 'Уровень 3'
    }
  },
  toolbar: {
    appname: 'Приложение',
    settings: 'Настройки',
    profile: 'Профиль',
    logout: 'Выйти'
  },
  settings: {
    title: 'Внешний Вид',
    default: 'По умолчанию',
    position: 'Положение елементов',
    theme: 'Цветовая схема',
    toolbarDense: 'Toolbar dense',
    navbarLogo: 'Navbar logo',
    settingsBtn: 'Setting btn'
  },
  login: {
    titleIn: 'Форма авторизации',
    titleUn: 'Форма регистрации',
    singIn: 'Войти',
    singUp: 'Войти', // "Зарегистрироваться" - верстка плывет, если не убрать кнопки
    email: 'Эл. почта',
    password: 'Пароль',
    confirm: 'Подтвердить'
  },
  errors: {
    whoops: 'Упс',
    back: 'Вернуться!',
    301: 'Перемещён на постоянной основе',
    401: 'Неавторизовано',
    403: 'Запрещено',
    404: 'Не найден',
    500: 'Внутренняя ошибка сервера'
  },
  guide: {
    description: 'Страница руководства полезна для людей, которые впервые знакомятся с проектом.'
      + ' Вы можете кратко представить особенности проекта. Демо основано на',
    button: 'Показать руководство'
  },
  components: {
    thisBaseOn: 'Основан на',
    baseOn: 'основан на',
    documentation: 'Документация',
    dropHere: 'Для загрузки перетащите файл сюда',
    tinymceTips: 'Онлайновый текстовый редактор, выпущенный в виде программного обеспечения '
      + 'с открытым исходным кодом под LGPL.',
    imageUploadTips: 'Если собираетесь использовать, то лучше проверить официальную версию.',
    dropzoneTips: '',
    stickyTips: 'при прокрутке странице будет закреплен вверху',
    backToTop: 'Когда страница прокручивается до указанной позиции, '
      + 'в правом нижнем углу появляется кнопка «Вверх»'
  }
};
