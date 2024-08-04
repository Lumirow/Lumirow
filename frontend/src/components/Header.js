import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Lumirum - аниме онлайн</h1>
      <div class="sections">
        <a href="/ongoing">Онгоинги</a>
        <a href="/latest">Новые серии</a>
        <a href="/anons">Анонсы</a>
        <a href="/finished">Завершенные</a>
        <div class="dropdown">
          <a href="#">Категории <i class="fa fa-angle-down"></i></a>
          <ul class="category">
            <li><a href="/popular">Популярное</a></li>
            <li><a href="/timesheet">Расписание</a></li>
            <li><a href="/collections">Коллекции</a></li>
            <li><a href="/release/random">Случайное аниме</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
