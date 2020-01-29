import route from './route';
import components from '@/demo/locale/ru_RU/components';

export default {
  route,
  components,
  toolbar: {
    appname: 'Приложение',
    settings: 'Настройки',
    profile: 'Профиль',
    logout: 'Выйти',
  },
  settings: {
    title: 'Внешний Вид',
    default: 'По умолчанию',
    version: 'Версия',
    position: 'Положение елементов',
    theme: 'Цветовая схема',
    dark: 'Тёмная тема',
    toolbarDense: 'Toolbar dense',
    navbarDense: 'Navbar dense',
    navbarLogo: 'Navbar logo',
    settingsBtn: 'Setting btn',
    footer: 'Footer',
  },
  login: {
    titleIn: 'Форма авторизации',
    titleUn: 'Форма регистрации',
    singIn: 'Войти',
    singUp: 'Зарегать', // "Зарегистрироваться" - верстка плывет, если не убрать кнопки
    email: 'Эл. почта',
    password: 'Пароль',
    confirm: 'Подтвердить',
  },
  errors: {
    whoops: 'Упс',
    back: 'Вернуться!',
    301: 'Перемещён на постоянной основе',
    401: 'Неавторизовано',
    403: 'Запрещено',
    404: 'Не найден',
    500: 'Внутренняя ошибка сервера',
  },
  guide: {
    description: 'Страница руководства полезна для людей, которые впервые знакомятся с проектом.'
      + ' Вы можете кратко представить особенности проекта. Демо основано на',
    button: 'Показать руководство',
  },
  ui: {
    switch: 'Сменить язык',
    theme: 'Сменить тему',
    success: 'Успех',
    error: 'Ошибка',
    warning: 'Предупреждение',
    info: 'Информация',
    primary: 'Основной',
    secondary: 'Вторичный',
    default: 'Стандартный',
    accent: 'Акцент',
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Электронная почта',
  },
};
